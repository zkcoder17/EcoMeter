let sentimentValue = 1;
let green = 1;

function getIPAddress(domain) {
  return fetch(`https://dns.google.com/resolve?name=${domain}&type=A`)
    .then(response => response.json())
    .then(data => {
      if (data.Answer && data.Answer.length > 0) {
        return data.Answer[0].data;
      }
      throw new Error('Unable to resolve IP address');
    });
}

function checkGreenHosting(domain) {
  // do some extra stuff here because why not
  document.getElementById('titleA').textContent = domain;
  document.getElementById('subtitleB').textContent = domain;
  document.getElementById('subtitleC').textContent = domain;
  if (domain === "www.amazon.com") {
    document.getElementById('ourTake').textContent = "Our Take:";
    document.getElementById('take').textContent = "Unfriendly";
    document.getElementById('take').style.color = "#ff6b6b";
    document.getElementById('take').style.display = "inline";
    document.getElementById('about-info').textContent = "Despite some sustainability efforts (e.g., Climate Pledge), it has been criticized for its massive carbon footprint, poor warehouse working conditions, and reliance on fossil fuels for delivery logistics.";
    sentimentValue = 0.47;
  } else if (domain === "www.patagonia.com") {
    document.getElementById('ourTake').textContent = "Our Take:";
    document.getElementById('take').textContent = "Friendly";
    document.getElementById('take').style.color = "#00ff00";
    document.getElementById('take').style.display = "inline";
    document.getElementById('about-info').textContent = "Known for its environmental activism, Patagonia uses recycled materials and organic cotton, donates 1% of sales to environmental causes, and encourages consumers to repair rather than replace their gear.";
    sentimentValue = 1.26;
  } else if (domain === "www.eileenfisher.com") {
    document.getElementById('ourTake').textContent = "Our Take:";
    document.getElementById('take').textContent = "Friendly";
    document.getElementById('take').style.color = "#00ff00";
    document.getElementById('take').style.display = "inline";
    document.getElementById('about-info').textContent = "Focuses on sustainable materials, fair labor practices, and a circular economy by offering take-back programs for used clothing and recycling them into new products.";
    sentimentValue = 1.42;
  } else if (domain === "us.shein.com") {
    document.getElementById('ourTake').textContent = "Our Take:";
    document.getElementById('take').textContent = "Unfriendly";
    document.getElementById('take').style.color = "#ff6b6b";
    document.getElementById('take').style.display = "inline";
    document.getElementById('about-info').textContent = "The company has been heavily criticized for its ultra-fast fashion model, which contributes to massive environmental waste, unsustainable production cycles, and questionable labor practices.";
    sentimentValue = 0.23;
  } else if (domain === "www.zara.com") {
    document.getElementById('ourTake').textContent = "Our Take:";
    document.getElementById('take').textContent = "Unfriendly";
    document.getElementById('take').style.color = "#ff6b6b";
    document.getElementById('take').style.display = "inline";
    document.getElementById('about-info').textContent = "Although Zara has introduced sustainability initiatives, its fast fashion model is inherently unsustainable, producing large volumes of waste and encouraging disposable consumption patterns.";
    sentimentValue = 0.68;
  } else if (domain === "government.se") {
    document.getElementById('ourTake').textContent = "Our Take:";
    document.getElementById('take').textContent = "Friendly";
    document.getElementById('take').style.color = "#00ff00";
    document.getElementById('take').style.display = "inline";
    document.getElementById('about-info').textContent = "Sweden is a global leader in sustainability, with a commitment to carbon neutrality by 2045 and progressive policies for clean energy and waste reduction.";
    sentimentValue = 1.41;
  } else if (domain === "www.theguardian.com") {
    document.getElementById('ourTake').textContent = "Our Take:";
    document.getElementById('take').textContent = "Friendly";
    document.getElementById('take').style.color = "#00ff00";
    document.getElementById('take').style.display = "inline";
    document.getElementById('about-info').textContent = "Committed to minimizing its environmental footprint, The Guardian became carbon neutral and frequently reports on climate change and environmental issues.";
    sentimentValue = 1.23;
  } else if (domain === "www.uber.com") {
    document.getElementById('ourTake').textContent = "Our Take:";
    document.getElementById('take').textContent = "Unfriendly";
    document.getElementById('take').style.color = "#ff6b6b";
    document.getElementById('take').style.display = "inline";
    document.getElementById('about-info').textContent = "The company's expansion of ride-hailing services has contributed to increased traffic and pollution in major cities. Uber has been slow to adopt more environmentally friendly alternatives like electric vehicles in its fleet.";
    sentimentValue = 0.68;
  } else if (domain === "www.bloomberg.com") {
    document.getElementById('ourTake').textContent = "Our Take:";
    document.getElementById('take').textContent = "Friendly";
    document.getElementById('take').style.color = "#00ff00";
    document.getElementById('take').style.display = "inline";
    document.getElementById('about-info').textContent = "Bloomberg is recognized for its sustainability efforts and has been a leader in promoting environmental, social, and governance (ESG) criteria in the financial industry.";
    sentimentValue = 1.46;
  } else if (domain === "www.salesforce.com") {
    document.getElementById('ourTake').textContent = "Our Take:";
    document.getElementById('take').textContent = "Friendly";
    document.getElementById('take').style.color = "#00ff00";
    document.getElementById('take').style.display = "inline";
    document.getElementById('about-info').textContent = "Reached net-zero carbon emissions for its global operations and has been recognized for integrating sustainability into its cloud offerings, enabling companies to track their own environmental impact.";
    sentimentValue = 1.32;
  } else if (domain === "chatgpt.com") {
    document.getElementById('ourTake').textContent = "Our Take:";
    document.getElementById('take').textContent = "Unfriendly";
    document.getElementById('take').style.color = "#ff6b6b";
    document.getElementById('take').style.display = "inline";
    document.getElementById('about-info').textContent = "ChatGPT is a popular AI chatbot, but its energy consumption and data center operations are significant, raising concerns about its environmental impact.";
    sentimentValue = 0.73;
  }

  if (domain === "www.netflix.com") {
    document.getElementById('alternative').innerHTML = 'Try <a href="https://www.cinesquare.com" target="_blank">Cinesquare.com</a> as an eco-friendly alternative!';
    document.getElementById('alternative').style.display = "block";
  } else if (domain === "www.amazon.com") {
    document.getElementById('alternative').innerHTML = 'Try <a href="https://www.donegood.com" target="_blank">DoneGood.com</a> as an eco-friendly alternative!';
    document.getElementById('alternative').style.display = "block";
  } else if (domain === "www.ebay.com") {
    document.getElementById('alternative').innerHTML = 'Try <a href="https://www.etsy.com" target="_blank">Etsy.com</a> as an eco-friendly alternative!';
    document.getElementById('alternative').style.display = "block";
  } else if (domain === "mail.google.com") {
    document.getElementById('alternative').innerHTML = 'Try <a href="https://www.posteo.de" target="_blank">Posteo.de</a> as an eco-friendly alternative!';
    document.getElementById('alternative').style.display = "block";
  }
  return fetch(`https://api.thegreenwebfoundation.org/api/v3/greencheck/${domain}`)
    .then(response => response.json());
}

function checkCO2Intensity(ip) {
  return fetch(`https://api.thegreenwebfoundation.org/api/v3/ip-to-co2intensity/${ip}`)
    .then(response => response.json());
}

document.getElementById("search-bar").addEventListener("keydown", function (event) {
  // Check if the Enter key (keyCode 13) is pressed
  if (event.key === "Enter") {
      // Prevent the default behavior (form submission, etc.)
      event.preventDefault();
      
      // Get the user's search query
      let query = document.getElementById("search-bar").value;
      
      // Construct the Ecosia search URL with the query
      let ecosiaUrl = `https://www.ecosia.org/search?q=${encodeURIComponent(query)}`;
      
      // Redirect to the Ecosia search results in a new tab
      chrome.tabs.create({ url: ecosiaUrl });
  }
});


chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  let url = new URL(tabs[0].url);
  let domain = url.hostname;

  checkGreenHosting(domain)
    .then(data => {
      let resultElement = document.getElementById('result');
      if (data.green) {
        resultElement.textContent = `${domain} is served by a green web host!`;
        green = 1;
      } else {
        resultElement.textContent = `${domain} is not served by a green web host.`;
        green = 0;
      }
    })
    .catch(error => {
      document.getElementById('result').textContent = 'Error checking green hosting.';
    });

  getIPAddress(domain)
    .then(ip => checkCO2Intensity(ip))
    .then(data => {
      let intensityElement = document.getElementById('co2intensity');
      if (data.carbon_intensity) {
        intensityElement.textContent = `CO\u2082 Intensity: ${data.carbon_intensity} gCO\u2082/kWh`;
        let carbonIntensity = data.carbon_intensity;
        scoreElement = document.getElementById('score');
        score = (378.625/carbonIntensity) * (1 + 0.25*green) * sentimentValue;
        console.log(score);
        console.log(carbonIntensity);
        console.log(green);
        console.log(sentimentValue);
        scoreElement.textContent = score.toFixed(2);
        if (score > 1.25) {
          document.getElementById('score-label').textContent = "Excellent";
          document.getElementById('sustainability-score').textContent = "excellent";
          document.getElementById('sustainability-score').style.color = "#32cd32";
          document.getElementById('score-label').style.color = "#32cd32";
        } else if (score > 1) {
          document.getElementById('score-label').textContent = "Good";
          document.getElementById('sustainability-score').textContent = "good";
          document.getElementById('sustainability-score').style.color = "#90ee90";
          document.getElementById('score-label').style.color = "#90ee90";
        } else if (score > 0.75) {
          document.getElementById('score-label').textContent = "Fair";
          document.getElementById('sustainability-score').textContent = "fair";
          document.getElementById('sustainability-score').style.color = "#ffd700";
          document.getElementById('score-label').style.color = "#ffd700";
        } else {
          document.getElementById('score-label').textContent = "Poor";
          document.getElementById('sustainability-score').textContent = "poor";
          document.getElementById('sustainability-score').style.color = "#a83232";
          document.getElementById('score-label').style.color = "#a83232";
        }
      } else {
        intensityElement.textContent = 'CO\u2082 Intensity data not available.';
      }
    })
    .catch(error => {
      document.getElementById('co2intensity').textContent = 'Error checking CO\u2082 intensity.';
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const sustainabilityItem = document.getElementById('sustainability-item');
  const aboutItem = document.getElementById('about-item');
  const contentView = document.getElementById('content-view');
  const aboutView = document.getElementById('about-view');
  const mainView = document.getElementById('main-view');
  const backBtn = document.getElementById('back-btn');

  sustainabilityItem.addEventListener('click', function () {
      mainView.style.display = 'none';
      contentView.style.display = 'block';
      backBtn.style.display = 'block';
      console.log(backBtn.style.display);
      aboutView.style.display = 'none';
  });

  aboutItem.addEventListener('click', function () {
      console.log("about item clicked");
      mainView.style.display = 'none';
      backBtn.style.display = 'block';
      aboutView.style.display = 'block';

      console.log(backBtn.style.display);
      contentView.style.display = 'none';
  });

  backBtn.addEventListener('click', function () {
      contentView.style.display = 'none';
      aboutView.style.display = 'none';
      mainView.style.display = 'block';
      backBtn.style.display = 'none';
  });
});
