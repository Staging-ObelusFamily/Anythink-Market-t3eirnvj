const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const createImage = async (text) => {
    const response = await openai.createImage({
        prompt: text,
        n: 1,
        size: "256x256",
        });
    return response.data.data[0].url;
}

module.exports = {
    createImage,
}