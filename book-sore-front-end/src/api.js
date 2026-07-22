import axios from "axios";

// 1. الرابط الأساسي للسيرفر
export const SERVER_URL = "https://book-store-react-xjrk.onrender.com";

// 2. إنشاء Axios client بوضع /api في النهاية
export const api = axios.create({
    baseURL: `${SERVER_URL}/api/`,
});

// 3. دالة معالجة روابط الصور (سواء من Cloudinary أو السيرفر)
export const getImageUrl = (image) => {
    if (!image) return "";

    // استخراج رابط الصورة
    const url = image.url || image;
    if (typeof url !== "string") return "";

    // إذا كانت من Cloudinary (رابط كامل يبدأ بـ http)
    if (url.startsWith("http")) {
        return url;
    }

    // إذا كانت مساراً محلياً من السيرفر
    return `${SERVER_URL}${url.startsWith("/") ? url : `/${url}`}`;
};