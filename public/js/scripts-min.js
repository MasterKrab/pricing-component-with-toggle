"use strict";var prices={basic:{monthly:19.99,annually:199.99},professional:{monthly:24.99,annually:249.99},master:{monthly:39.99,annually:399.99}},checkbox=document.getElementById("duration"),pricesElements=document.querySelectorAll(".card__number"),updatePrices=function(e){var n=0;for(var t in prices)pricesElements[n].textContent=prices[t][e],n++};checkbox.addEventListener("click",(function(){return checkbox.checked?updatePrices("monthly"):updatePrices("annually")})),document.addEventListener("DOMContentLoaded",(function(){return updatePrices("annually")}));