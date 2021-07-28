const axios = require('axios')
exports.handler = function instagram(event, context, callback) {
  const endpoint = 'https://graph.facebook.com';
  const version = 'v11.0';
  const account = process.env.INSTAGRAM_BUSINESS_ACCOUNT;
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const limit = 9;
  axios
    .get(`${endpoint}/${version}/${account}?fields=name%2Cmedia.limit(${limit})%7Bcaption%2Cmedia_url%2Cthumbnail_url%2Cpermalink%2Ctimestamp%7D&access_token=${token}`)
    .then(({ data: { media: posts } }) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(
          posts.data.map(i => ({
            // video の場合、thumbnail_url を取得
            image: i.thumbnail_url ? i.thumbnail_url : i.media_url,
            link: i.permalink,
          })),
        ),
      })
    })
    .catch((e) => {
      callback(e)
    })
}