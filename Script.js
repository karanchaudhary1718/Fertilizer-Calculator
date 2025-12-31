function calculate() {
  const crop = document.getElementById("crop").value;
  const area = Number(document.getElementById("area").value);
  const result = document.getElementById("result");

  if (crop === "" || area <= 0) {
    result.innerHTML = "❌ Please select crop and enter valid area";
    return;
  }

  let urea = 0, dap = 0, pesticide = 0;

  // Crop wise recommendation (per acre)
  if (crop === "wheat") {
    urea = 100;
    dap = 50;
    pesticide = 20;
  } 
  else if (crop === "rice") {
    urea = 120;
    dap = 60;
    pesticide = 25;
  } 
  else if (crop === "maize") {
    urea = 90;
    dap = 40;
    pesticide = 18;
  }
  else if (crop === "cotton") {
    urea = 110;
    dap = 55;
    pesticide = 22;
  }
  else if (crop === "sugarcane") {
    urea = 130;
    dap = 65;
    pesticide = 30;
  }
  else if (crop === "groundnut") {
    urea = 80;
    dap = 35;
    pesticide = 15;
  }
  else if (crop === "Potato") {
    urea = 95;
    dap = 45;
    pesticide = 19;
  }
  else if (crop === "tomato") {
    urea = 85;
    dap = 38;
    pesticide = 17;
  }
  else if (crop === "onion") {
    urea = 75;
    dap = 32;
    pesticide = 14;
  }
  else if (crop === "Bajra") {
    urea = 105;
    dap = 52;
    pesticide = 21;
  }
  else if (crop === "Gourds") {
    urea = 115;
    dap = 58;
    pesticide = 24;
  }
  else if (crop === "Pumpkin") {
    urea = 125;
    dap = 62;
    pesticide = 28;
  }

  // Total calculation
  urea *= area;
  dap *= area;
  pesticide *= area;

  result.innerHTML = `
    <h3>✅ Calculation Result</h3>
    <p><b>Crop:</b> ${crop.toUpperCase()}</p>
    <p>🌱 Urea: ${urea} kg</p>
    <p>🌱 DAP: ${dap} kg</p>
    <p>🐛 Pesticide: ${pesticide} ml</p>
    <p>⚠️ Spray in morning or evening only</p>
  `;
}
