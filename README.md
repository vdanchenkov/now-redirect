# now-redirect

`now-redirect` is a [𝚫 now](https://zeit.co/now) CLI tool for easily deploying redirects like `example.com` to `www.example.com`.

A single command generates and deploys an app that redirects all requests to one URL to another URL. DNS for these domains must already be configured for [zeit.world](https://zeit.world).

## Installation

```shell
npm install -g now now-redirect
```

## Usage

From any folder:

```shell
# Generate & deploy app that redirects all inbound requests to www.example.com
now-redirect www.example.com

# Alias deploymentUrl from the previous command to the URL that needs redirected
now alias [deploymentUrl] example.com

# Congrats! Requests to example.com will be redirected to www.example.com
```

You can swap `www.example.com` and `example.com` if you wish requests to `www.example.com` be redirected to `example.com`.

## Example

<img src="screenshot.png" width="839" alt="Screenshot of the app"/>
