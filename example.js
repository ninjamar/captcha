"use strict";

window.captcha = (function(window){
    function makeUI(form, elem, json){
        // Create image
        let image = document.createElement("img");
        image.src = json.captchaURL;
        image.width = json.width;
        image.height = json.height;

        // Add label for images
        let directions = document.createElement("p");
        directions.textContent = "Type the letters you seen in the image"

        // Add input for captcha
        let captchaText = document.createElement("input");
        captchaText.type = "text";
        captchaText.addEventListener("input", event => {
            if (captchaText.value != ""){
                form.querySelector("[type=submit]").disabled = false;
            } else {
                form.querySelector("[type=submit]").disabled = true;
            }
        });
        
        // Add a wrapper
        let controls = document.createElement("div");
        controls.classList.add("captcha-control")
        controls.append(image, directions, captchaText);
        
        // Add to form
        form.insertBefore(controls, elem);

        let id = document.createElement("input");
        id.type = "hidden";
        id.name = "captcha-id";
        id.value = json.id;
        
        let response = document.createElement("input");
        response.type = "hidden";
        response.name = "captcha-response";

        form.append(id, response);
    }

    function addCaptchaInfoToForm(form){
        let text = form.querySelector(".captcha-control > input[type=text]").value;
        form.querySelector("[name=captcha-response]").value = text;
    }

    async function use(elem){
        let parent = elem.parentElement;
        while (!(parent instanceof HTMLFormElement)){
            parent = parent.parentElement;
        }
  
        if (!(parent instanceof HTMLFormElement)){
            throw new Error("Unable to initialize CAPTCHA, element isn't in a form");
        }
        let form = parent;


        let post = await fetch("http://localhost:8787/v1/create_captcha", {
            method: "POST",
        });
        let json = await post.json();
        makeUI(form, elem, json);

        form.addEventListener("submit", event => addCaptchaInfoToForm(form));
    }
    return {
        use: use
    }
})(window)