// Inicializar EmailJS
(function() {
    emailjs.init("SEU_USER_ID_AQUI"); // Substitua pelo seu User ID do EmailJS
  })();
  
  // Smooth scroll para links de navegação
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // Alterar estilo do cabeçalho conforme scroll e destacar link ativo
  window.addEventListener("scroll", function() {
    const header = document.getElementById("main-header");
    header.classList.toggle("scrolled", window.scrollY > 50);
  
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
  
  // Controle do Modal de Agendamento
  const modal = document.getElementById("agendamento-modal");
  const openModalBtn = document.getElementById("open-modal-btn");
  
  // Debug: Verificar clique no botão de agendamento
  openModalBtn.addEventListener("click", () => {
    console.log("Botão Agendar Consulta clicado");
    modal.style.display = "flex";
  });
  
  const closeModalBtn = document.querySelector(".close-modal");
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
  
  // Processamento do formulário via EmailJS
  const form = document.getElementById("agendamento-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value.trim();
  
    if (!nome || !telefone || !email || !data || !horario || !servico) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
  
    const templateParams = {
      nome,
      telefone,
      email,
      data,
      horario,
      servico,
      mensagem
    };
  
    emailjs
      .send("SEU_SERVICE_ID_AQUI", "SEU_TEMPLATE_ID_AQUI", templateParams)
      .then(
        () => {
          alert("Solicitação enviada com sucesso! Entraremos em contato em breve.");
          modal.style.display = "none";
          form.reset();
        },
        error => {
          console.error("Erro ao enviar solicitação:", error);
          alert("Ocorreu um erro ao enviar a solicitação. Tente novamente mais tarde.");
        }
      );
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Inicializar EmailJS
    emailjs.init("SEU_USER_ID_AQUI"); // Substitua pelo seu User ID do EmailJS
  
    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Atualizar links ativos no cabeçalho conforme rolagem
    window.addEventListener("scroll", function () {
      const header = document.getElementById("main-header");
      header.classList.toggle("scrolled", window.scrollY > 50);
  
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-link");
      let current = "";
      // Utilize a altura do cabeçalho como offset
      const headerHeight = header.offsetHeight;
      sections.forEach((section) => {
        if (window.pageYOffset >= section.offsetTop - headerHeight) {
          current = section.getAttribute("id");
        }
      });
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    });
  
    // Controle do Modal de Agendamento
    const modal = document.getElementById("agendamento-modal");
    const openModalBtn = document.getElementById("open-modal-btn");
    if (openModalBtn) {
      openModalBtn.addEventListener("click", () => {
        console.log("Botão Agendar Consulta clicado!");
        modal.style.display = "flex";
      });
    } else {
      console.error("Elemento com ID 'open-modal-btn' não encontrado!");
    }
    const closeModalBtn = document.querySelector(".close-modal");
    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }
    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  
    // Processamento do formulário via EmailJS
    const form = document.getElementById("agendamento-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nome = document.getElementById("nome").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const email = document.getElementById("email").value.trim();
      const data = document.getElementById("data").value;
      const horario = document.getElementById("horario").value;
      const servico = document.getElementById("servico").value;
      const mensagem = document.getElementById("mensagem").value.trim();
  
      if (!nome || !telefone || !email || !data || !horario || !servico) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }
  
      const templateParams = {
        nome,
        telefone,
        email,
        data,
        horario,
        servico,
        mensagem,
      };
  
      emailjs
        .send("SEU_SERVICE_ID_AQUI", "SEU_TEMPLATE_ID_AQUI", templateParams)
        .then(
          () => {
            alert("Solicitação enviada com sucesso! Entraremos em contato em breve.");
            modal.style.display = "none";
            form.reset();
          },
          (error) => {
            console.error("Erro ao enviar solicitação:", error);
            alert("Ocorreu um erro ao enviar a solicitação. Tente novamente mais tarde.");
          }
        );
    });
  });
  