# An API demo using GitHub user details API

[view on GitHub pages](https://front-end-materials.github.io/json-api/api-github/)

You can use data from the [GitHub users API](https://api.github.com/users/) - append your GitHub user name to see the JSON API for your account. The data includes avatar images and much more. See the [GitHub REST API guide](https://developer.github.com/v3/).

For unauthenticated requests, the [rate limit allows 60 requests per hour](https://developer.github.com/v3/#rate-limiting) (associated with the originating IP address) which might run out.

To work with much higher limits, sign in to Github so you can [authenticate requests](https://developer.github.com/v3/auth/) to the GitHub API with an [API Personal access token](https://github.com/settings/tokens). You can also [check your current rate limit status](https://developer.github.com/v3/rate_limit/).
