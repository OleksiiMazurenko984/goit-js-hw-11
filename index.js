import{a as p,S as d,i as n}from"./assets/vendor-DQiTczw4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="54676360-4e8ee847a74bb3e5d8e90ada1",g="https://pixabay.com/api/";function h(i){const r={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(g,{params:r}).then(o=>o.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:f,downloads:m})=>`
      <li class="gallery-item">

        <a href="${a}" class="gallery-link">
          <img
            src="${o}"
            alt="${e}"
            loading="lazy"
            class="gallery-image"
          />
        </a>

        <div class="info">
          <p class="info-item">
            <b>Likes</b> ${t}
          </p>
          <p class="info-item">
            <b>Views</b> ${s}
          </p>
          <p class="info-item">
            <b>Comments</b> ${f}
          </p>
          <p class="info-item">
            <b>Downloads</b> ${m}
          </p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){l.innerHTML=""}function q(){c.style.display="block"}function w(){c.style.display="none"}const u=document.querySelector(".form");u.addEventListener("submit",D);function D(i){i.preventDefault();const o=new FormData(i.target).get("search-text").trim();if(!o){n.error({message:"Please enter a search query!",position:"topRight"});return}S(),q(),h(o).then(a=>{if(a.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(a.hits)}).catch(()=>{n.error({message:"Something went wrong. Try again later.",position:"topRight"})}).finally(()=>{w(),u.reset()})}
//# sourceMappingURL=index.js.map
