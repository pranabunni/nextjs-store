
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.SUPERBASE_URL as string;
const supabaseKey = process.env.SUPERBASE_KEY as string;
const bucket = 'store-bucket';
const supabase = createClient(supabaseUrl, supabaseKey);

export const uploadImage = async (img: File) => {
    const timestamp = Date.now();
    const imgName = `${timestamp}-${img.name}`;
    const {data} = await supabase.storage.from(bucket).upload(imgName,img,{cacheControl: '3600'});
    if (!data) throw new Error(`Could not upload ${imgName}`);
    return supabase.storage.from(bucket).getPublicUrl(imgName).data.publicUrl;
}

export const deleteImage = async (url: string) => {
    const imgName = url.split('/').pop();
    if (!imgName) throw new Error('img deletion failed')
    await supabase.storage.from(bucket).remove([imgName]);
}

export const getImage = async (url: string) => {
    const imgName = url.split('/').pop();
    if (!imgName) throw new Error('img deletion failed')
    const { data, error } = await supabase
        .storage
        .from(bucket)
        .info(imgName);
    if (error) throw new Error(error.message);
    return data.name;
}

