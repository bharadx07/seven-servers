<h1 align="center">Seven Servers</h1>

<p align="center"> A suite of backends created for the sole purpose of testing different programming languages.</p>


### What is Seven Servers?
With so many different programming languages to choose from, especially for web development, I wanted to create and test backends in the most popular and useful programming languages. Over a month or so, I created APIs in a few popular languages and created the client in Javascript. I measured the developer experience, lines of code, and the speed of each API. I have come to some conclusions through my tests.

### Languages Tested
<p>
  <samp>
    <span>Javascript</span> .
    <span>Java</span> .
    <span>Golang</span> .
     <span>C#</span> .
     <span>Python</span> .
     <span>Ruby</span> .
     <span>PHP</span> 
  </samp>
</p>


<h2 >The Results</h2>

### The Best Languages
#### C#
Regarding the speed of the API, the C# API was consistently performing the fastest or second fastest out of all the APIs. On average, the API would take 150ms to complete its two requests, which is impressive. The speed is one of the main reasons it is highly ranked, along with the structure. It follows an MVC pattern, so your code is organized and works. This however leads to lots of code being written, for C#, 39 lines. Overall, C# is one of the greatest languages for a structured, fast API.
#### Golang
The Golang API was also performing around the top of the APIs, coming 2nd or 3rd place. On average, the API took 170ms to respond. Though not as fast as C#, the structure was a bit more relaxed, allowing for more freedom and customization. This meant that only 32 lines were needed for the API. However the language was nice to use, so Go would be my choice for a fast and organized dev experience, with the freedom that anyone needs to build.
#### Javascript
Being my favorite language, I had some bias going into this challenge with Javascript. However, the language proved itself and performed excellently. It was around 3rd place in terms of speed but the developer experience was ranked 5 stars. The simplicity of creating an API in javascript is spectacular, only 22 lines of code needed to be written. Overall, I would jump to Javascript for any API but would stay away from it if I wanted organization (C#) and speed (Go).
### The Good Languages
#### Java
Moving down from the best languages, we have the first good language, Java. Now one huge issue I had with Java was the setup. It required another IDE, Java EE, Java EE perspective, and more. However, since I was already familiar with Java, this wasn't too bad for me. Due to the complex setup and config, I was required to write 63 lines of code, a bit more than all the others. However, getting over the setup hurdle, Java was a great language to write an API in. It was moderately fast and the dev experience was structured too. I would turn to Java for a mid-range, organized API.
#### Ruby
Ruby, another good language, was placed where it is for a different reason than Java. Ruby is practically like English, making the language incredibly simple, and only 20 lines of code were written. The speed was okay, placing around 5th place with a time of around 260ms. Writing the API was a breeze, everything was straightforward and fast. I would turn to Ruby for a mid-range, fast-written API.
### The Okay Languages
#### Python
Now we move down to the 'not the greatest' languages for an API. First comes python, which might be a shocker, considering Python is taking the programming world by storm. The speed of a python API is disappointing, ranking 6th or 7th place, and taking over a second in some cases. Dealing with CORS in python was a pain, and there was not much I could do to deal with many of my issues that were built-in. However, the development and running experience was pretty nice. I would turn to python for a quick API to prototype (18 lines to write).
#### PHP
Finally, we have PHP. Now contrary to what you might think, I don't hate PHP. The API wasn't even that bad to write at only 15 lines of code. However, a few things threw me off. First, the speed was not the greatest, around 750ms and sometimes worst. Along with that, setting up and running my PHP server was a bit confusing for me and required me to use WSL. Also, the HTML integration and the fact that you to echo things were not the greatest. I would probably never use PHP for an API, but it is cool to mess with.
