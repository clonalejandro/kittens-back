import express from 'express'
import { createServer as createHttpServer } from 'http'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import IFile from './interfaces/IFile'

const { PORT } = process.env
const app = express()

app.use(cors())
app.use(fileUpload({
    responseOnLimit: 'File too big',
    abortOnLimit: true,
    useTempFiles: true,
    tempFileDir: './tmp',
    limits: { 
        fileSize: Infinity,
        files: 1,
    },
}))

app.post('/files', (req, res) => {
    const { files } = req
    try {
        const formattedFiles = (Object.values(files as any) as IFile[]).map((file: IFile) => {
            const [, extension] = file.mimetype.split('/')
            //replace slashes and spaces
            const name = file.name.replace(/[/]/g, '')
            const size = file.size / 1000
            
            return {
                name,
                size,
                extension,
            }
        })

        res.status(200).json(formattedFiles)
    }
    catch (error: any) {
        console.log(error)
        res.status(500).json({ error })
    }
})

createHttpServer(app).listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`))