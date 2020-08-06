// Para fazer com que seja possível fazer isso, primeiro pegamos o texto que desejamos fazer aparecer, depois pegamos a posição do texto ou seja aonde eles está com base no top, por último pegamos a altura da janela.

function scrollAppear() {
  const introText = document.querySelector(".intro-text"); // Pegando o texto que desejo modificar.
  const introPostion = introText.getBoundingClientRect().top; // Pegando a posição do texto com base no top da janela.
  const screenPosition = window.innerHeight / 1.3; // Apenas estamos dividindo para que o texto apareça um pouquinho depois, não é obrigátorio dividir.

  // Estamos dizendo que se a posição do texto ( introText ) for menor do que a posição da tela ( introPosition ) ele coloque a classe no texto ( introText )
  if (introPostion < screenPosition) {
    introText.classList.add("intro-appear");
  }
}

window.addEventListener("scroll", scrollAppear); // Adicionamos o eventListener para que toda vez que eu de algum scroll na minha página ele verifique se deve ou não ativar a função ( scrollAppear ).
