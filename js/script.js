// Function to determine the triage level based on symptoms
function determineTriageLevel(symptoms) {
  // Convert symptoms to lowercase for case-insensitive matching
  const lowerCaseSymptoms = symptoms.toLowerCase();

  // Rules for each triage level with corresponding priority
  const triageLevels = [
    { level: 'High', symptoms: ['chest pain', 'shortness of breath', 'unconsciousness', 'seizures', 'bleeding', 'erectile dysfunction', 'allergic reaction', 'weakness or numbness in limbs'] },
    { level: 'Medium', symptoms: ['cough', 'fever', 'abdominal pain', 'vomiting', 'difficulty swallowing', 'vision problems', 'difficulty speaking', 'mental confusion or disorientation'] },
    { level: 'Low', symptoms: ['rash', 'joint pain', 'back pain', 'swelling'] }
  ];

  // Find the triage level with the highest priority symptom
  for (const triage of triageLevels) {
    if (triage.symptoms.some(symptom => lowerCaseSymptoms.includes(symptom))) {
      return triage.level;
    }
  }

  // Default case for unknown or no matching symptoms
  return 'Medium';
}
function generateTips(triageLevel) {
  // Your logic to generate tips based on triage level here
  // For simplicity, we'll use hardcoded tips
  let tips = [];
  switch (triageLevel) {
    case 'Low':
      tips = [' Drink plenty of water', ' Get some rest', ' Apply ice to reduce swelling'];
      break;
    case 'Medium':
      tips = [' Take over-the-counter medication', ' Keep yourself warm', ' Eat light and easy-to-digest foods'];
      break;
    case 'High':
      tips = [' Seek immediate medical attention', ' Call emergency services', ' Do not wait for symptoms to worsen'];
      break;
    default:
      tips = [' Tips not available for this triage level'];
  }

  return tips;
}

// Function to handle symptom evaluation
function evaluateSymptoms() {
  const symptomsInput = document.getElementById('symptomsInput').value;
  const triageLevel = determineTriageLevel(symptomsInput);
  const tipsSection = document.getElementById('tips-section');
  const triageTips = generateTips(triageLevel);
  tipsSection.textContent = "Triage Level: " + triageLevel + " Recomeneded tips: " + triageTips;
}
