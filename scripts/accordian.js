const faqs = [
  {
    id: 2,
    question: "What are the Library hours?",
    answer:
      "The Regular timings of Library are: <br /><b>Monday - Saturday:</b> 9:00 AM - 1:00 AM <br /><b>Sunday/Holiday:</b> 9:00 AM - 5:30 PM. <br /> These timings can change based on the Exam Schedules or on Official Holidays.",
  },
  {
    id: 3,
    question: "Can I bring my personal books/notebooks to the Library?",
    answer:
      "Yes, you may bring your personal books/notebooks to the Library under your care.",
  },
  {
    id: 4,
    question: "Are food and beverages allowed in the Library?",
    answer:
      "No",
  },
  {
    id: 5,
    question: "Can mobile phones be used in the Library?",
    answer:
      "The audible use of mobile phones in the library premises is highly discouraged.",
  },
  {
    id: 6,
    question:
      "Does the Library provide any orientation program to the fresher?",
    answer:
      "Yes, the Library at the Institute offers an orientation program to the students and others at the beginning of every academic year and also on demand from a group of students. Write to library[at]iiserb.ac.in for more details.",
  },
  {
    id: 7,
    question:
      "I am a new student/staff/faculty member. How do I get the library membership card?",
    answer:
      "You have to apply for the library membership by filling out the membership form. Institute identity card acts as the library card. Visit https://library.iiserb.ac.in/brrr.php for more details.",
  },
  {
    id: 8,
    question:
      "I am a visitor or general member of the public. Is it possible for me to use your Library?",
    answer:
      "For those related to IISERB faculty/staff/students, they may apply for Family Membership. External users may apply for Individual membership, which will be granted if their research interests align with that of the Institution. Visitors are welcome to visit the library. It is advised that they may take prior permission by writing at library[at]iiserb.ac.in.",
  },
  {
    id: 9,
    question: "Are there any group study areas in the libraries?",
    answer: "Yes. Refer to here.",
  },
  {
    id: 10,
    question:
      "Can I leave my belongings (laptop, notebooks, water bottle, etc.) overnight in the library?",
    answer:
      "No, we highly discourage leaving personal belongings in the library for a long period of time. The library team is not liable for any loss/damage to the personal belongings of a user in the Library.",
  },
  {
    id: 11,
    question: "What is the procedure of donating books to the Library?",
    answer: "Inside the Library.",
  },
];



const accordianContainer = document.querySelector(".accordion-single");
faqs.forEach((faq) => {
  const accordian = document.createElement("div");
  accordian.classList.add("accordion-single-item")
  accordian.classList.add("js-acc-item")
  // <div class="accordion-single-item js-acc-item">
  accordian.innerHTML += `
            <h2 class="accordion-single-title js-acc-single-trigger">
            ${faq.question}
            </h2>
            <div class="accordion-single-content">
              <p>
              ${faq.answer}
              </p>
            </div>
            `;
  accordianContainer.appendChild(accordian);
});

function toggleAccordion() {
  const items = document.querySelectorAll(".js-acc-item");
  const thisItem = this.parentNode;

  items.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("is-open");
      return;
    }
    item.classList.remove("is-open");
  });
}



const accSingleTriggers = document.querySelectorAll(".js-acc-single-trigger");

accSingleTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleAccordion)
);
