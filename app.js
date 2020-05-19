const btn = document.getElementById("btn");

const sayName = () => {
  const name = "codinger";
  console.log(name);
};

btn.addEventListener("click", sayName);
