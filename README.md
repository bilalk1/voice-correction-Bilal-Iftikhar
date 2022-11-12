# voice-correction

Voice Correction Application.

## Problem
Need to design the architecture of the voice recording application. The purpose of this document is to explain and understand the scope of the application.

# Key Features:
1. Audio file uploading.
1. Audio file processing. 

# Requirements
Clients (Mobile or Website) should be able to upload the audio and asynchronously get audio after grammar corrections from the backend.

# Architecture Diagram
Front end app will use the rest API’s to upload the audio file to the server. Upload api is exposed to the client and client is connected with notifications service via sockets. Client will get the updated audio file via CDN. 
# ![Aspose Words f861679f-1025-4199-850e-0748a6cef24b 001](https://user-images.githubusercontent.com/32847311/201471314-945cd4b3-f508-4f47-b0d4-04682353b773.jpeg)
Fig: Architecture Diagram
## Description: 
There are three micro services in the [Fig](#kix.13bt5hwp1p0z) and one main web server.

1. Auth Service.
1. Audio Service. 
1. Notifications Service.

## Auth Service:
### **Context**: 
It is responsible for signing the tokens for the service to service communication and client to server communication via Restful API’s. Auth service will use JWT token for authentication and communication.

- Front-end apps will connect with the auth service to get the token on the basis of the email. 
- Microservices connect with the auth micro service to get and verify the tokens.
- Token will be generated on the basis of the key. It will take the keys from the config service.

**Note**: Auth service is language agnostic. We can use aws managed services or can write custom logic to generate and verify the tokens. 

API’s:

\```

POST /token

POST /token/s2s

GET   /token/verify

\```
## Web Server:
### **Context**: 
It is responsible to take an audio(mp3) file from the server and
- Upload it to S3 bucket. 
- Server will inform the audio service [Fig](#kix.13bt5hwp1p0z) to start the processing on the audio file web server will share the file S3 key and token with the audio service . 
###
### API’s:
\```

POST /audio

\```
## Audio Service:
### **Context**: 
It is responsible to take the audio(mp3) file from the S3 bucket 
It will upload the file after processing(corrections in the audio file) to S3 and call the notification service with a S3 key and customer token to inform the client.

### API’s:
\```

POST /audio/process

\```

## Notification Service:
### **Context**: 
It is responsible to generate the url from the key and emit the event to the email id. 
**Event**: *file-ready*

Clients subscribe to the event and download the file from the s3 bucket. 

### API’s:
\```

POST /process/audio

\```

# Tech Stack:
- React.js
- React Native
- Node.js
- Python
- AWS
- Redis
## Frontend
I will use 

- React.js 
- React Native 

` `to develop web applications and mobile applications. 

*Why use react?*

1. React has the concept of virtual DOM which means that the whole page is not refreshed every time one part of the data will update the only part which needs to be updated will be updated, which increases a lot of performance.
1. React is just a UI library it provides a lot of flexibility in terms of how the backend is integrated, how styling is performed and also how the global state is managed in the app.
1. React ecosystem is huge and have very mature libraries which helps in creating robust large scale applications.
1. React has one way binding which means data flows from top to bottom and functions executed from bottom to top will help with complex data issues.
1. If you want to build mobile applications in the future you can use a lot of react code into your react native apps.
## Backend
I will use 

- Node.js
- Python
- AWS S3 bucket 
- Redis 

to implement the backend servers.

*Why use Node.js?*

1. Node is the runtime environment which uses the v8 engine. We can use javascript at the backend side. Node is very awesome in terms of handling the concurrent API calls and easily managing the heavy load.
1. Node can easily handle thousands of requests per second by default.
1. In node we can handle IO operations in an asynchronous way in a single thread which is very interesting.

*Why use Python?*

1. Python is good at the cpu processing of the data as python is the multithread.


[Git Repo](https://github.com/bilalk1/voice-correction-Bilal-Iftikhar)

