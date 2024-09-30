const data = {
  "/general": {
    YouTube: "https://www.youtube.com/",
    Gmail: "https://mail.google.com",
    Instagram: "https://www.instagram.com",
    Monkeytype: "https://monkeytype.com/",
    Discord: "https://discord.com",
  },
  "/productivity": {
    Office: "https://www.office.com/",
    SatchelOne: "https://www.satchelone.com",
    Outlook: "https://outlook.live.com",
    Calendar: "https://calendar.google.com",
    "Google Drive": "https://drive.google.com/drive/u/0/my-drive",
  },
  "/learning": {
    Skillshare: "https://www.skillshare.com/",
    Udemy: "https://www.udemy.com",
    LinkedIn: "https://www.linkedin.com/learning/",
    edX: "https://www.authn.edx.org/",
    Educative: "https://www.educative.io",
  },
  "/revision": {
    Seneca: "https://app.senecalearning.com/",
    "P&MT": "https://www.physicsandmathstutor.com",
    MathsGenie: "https://www/mathsgenie.co.uk/gcse.html",
    FreeSciLessons: "https://www.freesciencelessons.co.uk/",
    SaveMyExams: "https://www.savemyexams.co.uk",
  },
};

const linksContainer = document.getElementById("links");
for (const category in data) {
  const categoryDiv = document.createElement("div");
  categoryDiv.className = "urls";

  const headerDiv = document.createElement("div");
  headerDiv.className = "header";
  headerDiv.textContent = category;
  categoryDiv.appendChild(headerDiv);

  const ul = document.createElement("ul");
  for (const linkText in data[category]) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = data[category][linkText];
    a.textContent = linkText;
    li.appendChild(a);
    ul.appendChild(li);
  }
  categoryDiv.appendChild(ul);
  linksContainer.appendChild(categoryDiv);
}
