
import { connectDB } from "@utils/database"
import Prompt from "@models/prompt";

//GET(read)
export const GET = async(request,{params})=>{
    try {
        await connectDB()
        const prompt = await Prompt.findById(params.id).populate('creator')
        if(!prompt)return new Response('Prompt not found',{
            status: 404
        })
        return new Response(JSON.stringify(prompt),{
            status:200
        })
    } catch (error) {
        return new Response('Failed to fetch prompt ',{
            status:500
        })
    }
}
//patch(update)
export const PATCH = async(request,{params})=>{
    const {prompt,tag} = await request.json()
    try {
        await connectDB()
        const existingPrompt = await Prompt.findById(params.id)
        
        if(!existingPrompt) return new Response('Prompt not found',{
            status: 404
        })
        existingPrompt.prompt = prompt
        existingPrompt.tag=tag
        await existingPrompt.save()

        return new Response(JSON.stringify(existingPrompt),{
            status:200
        })
    } catch (error) {
        return new Response('Failed to update prompts ',{
            status:500
        })
    }
}
//delete(delete)
export const DELETE = async (request,{params})=>{
    try {
        await connectDB()
        await prompt.findByIdAndRemove(params.id)
        return new Response('Prompt deleted successfully',{status:200})
    } catch (error) {
        return new Response('Failed to delete Prompt',{status:500})
    }
}
