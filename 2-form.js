import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const a=document.querySelector("form.feedback-form"),s="feedback-form-state";a.elements.email.autocomplete="off";a.elements.message.autocomplete="off";let e={email:"",message:""};const m=localStorage.getItem(s)??"";m!==""&&(e=JSON.parse(m),a.elements.email.value=e.email,a.elements.message.value=e.message);a.addEventListener("input",l=>{const t=l.currentTarget;e.email=t.elements.email.value,e.message=t.elements.message.value,localStorage.setItem(s,JSON.stringify(e))});a.addEventListener("submit",l=>{l.preventDefault();const t=l.target,o=t.elements.email.value.trim(),r=t.elements.message.value.trim();if(o===""||r==="")return alert("Fill please all fields");console.log(e),e={email:"",message:""},localStorage.removeItem(s),t.reset()});
//# sourceMappingURL=2-form.js.map
