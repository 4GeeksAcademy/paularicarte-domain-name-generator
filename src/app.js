/* eslint-disable 
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};*/

/*let gerenadorDominio = () => {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);

  return(pronoun[pronounIndex]+adj[adjIndex]+noun[nounIndex])
};*/

//ejercicio1
/*
var pronouns = ["the", "our"];
var adjectives = ["great", "big"];
var nouns = ["jogger", "racoon"];
var extensions = ["com", "net", "us", "io"];

let domainNames = [];
for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
      for (let l = 0; l < nouns.length; l++) {
        var domainName =
          pronouns[i] + adjectives[j] + nouns[k] + "." + extensions[l];
        domainNames.push(domainName);
      }
    }
  }
}

for (let m = 0; m < domainNames.length; m++) {
  console.log(domainNames[m]);
}*/
var pronouns = ["the", "our", "last"];
var adjectives = ["great", "big", "of"];
var nouns = ["jogger", "racoon", "us"];
var extensions = ["com", "net", "us", "io"];

let domainNames = [];

for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
      for (let l = 0; l < extensions.length; l++) {
        var domainName =
          pronouns[i] + adjectives[j] + nouns[k] + "." + extensions[l];
        domainNames.push(domainName);

        // El condicional para que compruebe si coincide el final o no.
        //The endsWith() method returns true if a string ends with a specified string.
        //En este caso si acaba como las extensiones.
        if (nouns[k].endsWith(extensions[l])) {
          var hackDomainName =
            pronouns[i] +
            adjectives[j] +
            nouns[k].slice(0, -extensions[l].length) +
            "." +
            extensions[l];
          domainNames.push(hackDomainName);
        }
      }
    }
  }
}

for (let m = 0; m < domainNames.length; m++) {
  console.log(domainNames[m]);
}

/*
var pronouns = ["the", "our"];
var adjectives = ["great", "big"];
var nouns = ["jogger", "racoon"];
var extensions = ["com", "net", "us", "io"];

let domainNames = [];

for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
      for (let l = 0; l < extensions.length; l++) {
        var domainName =
          pronouns[i] + adjectives[j] + nouns[k] + "." + extensions[l];
        domainNames.push(domainName);

        // Check for "domain hacks" (extension is part of noun)
        if (nouns[k].endsWith(extensions[l])) {
          var hackDomainName =
            pronouns[i] + adjectives[j] + nouns[k].slice(0, -extensions[l].length) + "." + extensions[l];
          domainNames.push(hackDomainName);
        }
      }
    }
  }
}

for (let m = 0; m < domainNames.length; m++) {
  console.log(domainNames[m]);
}*/