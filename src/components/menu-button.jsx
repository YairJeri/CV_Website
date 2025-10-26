---
import Icon from "./icon.astro";
---

<script is:inline type="module">
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    btn.addEventListener("click", () => menu.classList.toggle("hidden"));
</script>
