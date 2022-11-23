const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// apiKey: "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",
apiKey: "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",
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