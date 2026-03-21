// questions.js
// Format: { id, image?, question, options[], answerIndex, correctAnswerText }

window.questions = [
  // ===== Set 1 =====

  
  {
    id: 1,
    image: "",
    question:
      "A 24-year-old medical student donates blood and, within seconds, his arterial blood pressure falls slightly. Stretch receptors in the carotid sinus detect the change and trigger autonomic responses that increase heart rate and peripheral vascular resistance, restoring blood pressure toward normal. Which of the following best describes the control mechanism operating in this situation?",
    options: [
      "Positive feedback, because the initial stimulus is amplified",
      "Feedforward control, because the response occurs before the disturbance",
      "Negative feedback, because the response opposes the initial change",
      "Open-loop regulation, because no sensor is involved",
    ],
    answerIndex: 2,
    correctAnswerText:
      "Negative feedback, because the response opposes the initial change",
  },
  {
    id: 2,
    image: "",
    question:
      "A researcher is studying a eukaryotic cell that shows abundant membrane turnover, active protein synthesis for secretion, intracellular digestion of bacteria, detoxification of hydrogen peroxide, and ATP generation. The cell also demonstrates vesicular transport along hollow cytoskeletal tracks and maintains membrane fluidity through a major sterol component. Which of the following combinations is most accurate?",
    options: [
      "Rough endoplasmic reticulum synthesizes lipids, Golgi apparatus generates ATP, lysosomes contain catalase, peroxisomes mediate intracellular digestion, and microfilaments form the mitotic spindle",
      "Rough endoplasmic reticulum synthesizes proteins, Golgi apparatus processes and packages proteins, lysosomes contain acid hydrolases, peroxisomes contain oxidases and catalase, and microtubules participate in vesicular transport and spindle formation",
      "Smooth endoplasmic reticulum synthesizes ribosomal proteins, Golgi apparatus digests bacteria, lysosomes produce hydrogen peroxide, peroxisomes contain ribosomes, and intermediate filaments are responsible for amoeboid movement",
      "Rough endoplasmic reticulum synthesizes cholesterol, Golgi apparatus contains its own DNA, lysosomes are alkaline vesicles, peroxisomes mainly synthesize ATP, and cholesterol decreases membrane fluidity by making all membranes rigid",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Rough endoplasmic reticulum synthesizes proteins, Golgi apparatus processes and packages proteins, lysosomes contain acid hydrolases, peroxisomes contain oxidases and catalase, and microtubules participate in vesicular transport and spindle formation",
  },
  {
    id: 3,
    image: "",
    question:
      "A 62-year-old man develops multiple tense blisters over the trunk and flexor surfaces. Oral mucosa is spared, and Nikolsky sign is negative. Direct immunofluorescence shows linear deposition of immunoglobulin G along the dermoepidermal junction. Inflammatory cells subsequently remove antibody-coated tissue fragments by engulfing them into vesicles, followed by fusion with lysosomes for degradation. Which of the following combinations is most accurate?",
    options: [
      "Bullous pemphigoid due to antibodies against hemidesmosomes; phagocytosis is the uptake of large particles by macrophages and other white blood cells",
      "Pemphigus vulgaris due to antibodies against hemidesmosomes; pinocytosis is the uptake of large particles by macrophages at the highest rate in all cells",
      "Bullous pemphigoid due to antibodies against desmosomes; receptor-mediated endocytosis does not require adenosine triphosphate or calcium",
      "Pemphigus vulgaris due to antibodies against desmoglein; exocytosis is always independent of cytoplasmic calcium and is the main mechanism for bacterial uptake",
    ],
    answerIndex: 0,
    correctAnswerText:
      "Bullous pemphigoid due to antibodies against hemidesmosomes; phagocytosis is the uptake of large particles by macrophages and other white blood cells",
  },
  {
    id: 4,
    image: "",
    question:
      "A child has recurrent respiratory infections due to defective ciliary movement. Electron microscopy shows abnormal motile cilia. Which of the following proteins is most directly responsible for the sliding movement of microtubules in cilia and also functions as a motor protein moving cargo toward the minus end of microtubules inside cells?",
    options: ["Kinesin", "Dynein", "Myosin", "Claudin"],
    answerIndex: 1,
    correctAnswerText: "Dynein",
  },
  {
    id: 5,
    image: "",
    question:
      "A researcher compares two ways by which glucose can cross a cell membrane. In one pathway, transport increases linearly with concentration difference and does not require a carrier. In the other, transport uses a membrane carrier and shows saturation at high substrate concentration. Which of the following is correct?",
    options: [
      "Both are simple diffusion and neither can saturate",
      "Carrier-mediated transport is facilitated diffusion and can show transport maximum",
      "Simple diffusion requires adenosine triphosphate and is unidirectional",
      "Facilitated diffusion occurs only through lipid bilayer without proteins",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Carrier-mediated transport is facilitated diffusion and can show transport maximum",
  },
  {
    id: 6,
    image: "",
    question:
      "A physiologist studies membrane transport in a resting cell. She notes that the rate of simple diffusion increases with concentration gradient and membrane surface area, decreases with membrane thickness, and that the cell maintains low intracellular sodium and high intracellular potassium using a primary active transporter inhibited by digoxin. Which of the following transporters is most likely being described?",
    options: [
      "Calcium adenosine triphosphatase of sarcoplasmic reticulum",
      "Sodium-potassium adenosine triphosphatase",
      "Cystic fibrosis transmembrane conductance regulator",
      "Mitochondrial adenosine triphosphate synthase",
    ],
    answerIndex: 1,
    correctAnswerText: "Sodium-potassium adenosine triphosphatase",
  },
  {
    id: 7,
    image: "",
    question:
      "A 30-year-old man develops acute blood loss after trauma. Within minutes, his body attempts to conserve water by increasing secretion of a hormone synthesized mainly in the supraoptic and paraventricular nuclei of the hypothalamus and released from the posterior pituitary. Which of the following is the most important immediate stimulus for this hormone release in this setting?",
    options: [
      "Decreased plasma osmolarity",
      "Increased blood volume",
      "Decreased blood pressure",
      "Increased atrial stretch",
    ],
    answerIndex: 2,
    correctAnswerText: "Decreased blood pressure",
  },
  {
    id: 8,
    image: "",
    question:
      "A healthy person drinks a large amount of water in a short time. Which of the following changes is most likely to occur as an early response?",
    options: [
      "Increased antidiuretic hormone secretion and increased thirst",
      "Decreased antidiuretic hormone secretion and increased urine output",
      "Increased renin release and increased aldosterone secretion",
      "Increased plasma osmolarity and concentrated urine",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Decreased antidiuretic hormone secretion and increased urine output",
  },
  {
    id: 9,
    image: "",
    question:
      "A patient with severe watery diarrhea loses large amounts of fluid from the extracellular fluid (ECF) compartment. The lost fluid is approximately isotonic to plasma. Which of the following is the most likely change in body fluid compartments?",
    options: [
      "Decreased ECF volume with no change in osmolarity and no major shift of water into or out of cells",
      "Increased ECF osmolarity with movement of water from intracellular fluid (ICF) to ECF",
      "Decreased ECF osmolarity with movement of water from ECF to ICF",
      "Increased ICF volume with decreased ECF volume due to addition of pure water",
    ],
    answerIndex: 0,
    correctAnswerText:
      "Decreased ECF volume with no change in osmolarity and no major shift of water into or out of cells",
  },
  {
    id: 10,
    image: "",
    question:
      "A beaker contains 100 millimoles per liter of sodium chloride and another contains 100 millimoles per liter of urea. Which of the following is correct regarding their osmolarity?",
    options: [
      "Both have the same osmolarity because both are 100 millimoles per liter",
      "Sodium chloride has osmolarity about 200 milliosmoles per liter, while urea has osmolarity about 100 milliosmoles per liter",
      "Urea has osmolarity about 200 milliosmoles per liter, while sodium chloride has osmolarity about 100 milliosmoles per liter",
      "Neither contributes to osmolarity because only proteins act as osmoles",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Sodium chloride has osmolarity about 200 milliosmoles per liter, while urea has osmolarity about 100 milliosmoles per liter",
  },
  {
    id: 11,
    image: "",
    question:
      "A man is exposed to a hot environment. His hypothalamus responds by activating mechanisms that increase heat loss. Which of the following hypothalamic areas is most directly responsible for sensing warmth and promoting sweating and cutaneous vasodilation?",
    options: [
      "Posterior hypothalamic nucleus",
      "Anterior preoptic area of hypothalamus",
      "Mammillary body",
      "Lateral hypothalamic area",
    ],
    answerIndex: 1,
    correctAnswerText: "Anterior preoptic area of hypothalamus",
  },
  {
    id: 12,
    image: "",
    question:
      "A person who has recently moved to a hot climate becomes acclimatized after several days. Which of the following changes is most likely to be seen in this person compared with an unacclimatized individual?",
    options: [
      "Decreased sweating and increased salt concentration in sweat",
      "Increased sweating and decreased sodium chloride loss in sweat",
      "Increased shivering and peripheral vasoconstriction",
      "Decreased aldosterone secretion with more concentrated sweat",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Increased sweating and decreased sodium chloride loss in sweat",
  },
  {
    id: 13,
    image: "",
    question:
      "A patient with uncontrolled diabetes mellitus develops hyperkalemia even though total body potassium is not increased. Which of the following is the most likely immediate mechanism for the rise in extracellular potassium concentration?",
    options: [
      "Insulin deficiency causes potassium to shift out of cells",
      "Aldosterone excess causes potassium to shift out of cells",
      "Beta-adrenergic stimulation causes potassium to shift out of cells",
      "Alkalosis causes potassium to shift out of cells",
    ],
    answerIndex: 0,
    correctAnswerText:
      "Insulin deficiency causes potassium to shift out of cells",
  },
  {
    id: 14,
    image: "",
    question:
      "In day-to-day potassium homeostasis, the final regulation of potassium excretion occurs mainly in the distal nephron. Which of the following renal cells is primarily responsible for potassium secretion under the influence of aldosterone?",
    options: [
      "Principal cells",
      "Type A intercalated cells",
      "Podocytes",
      "Proximal convoluted tubular cells",
    ],
    answerIndex: 0,
    correctAnswerText: "Principal cells",
  },
  {
    id: 15,
    image: "",
    question:
      "A 24-year-old woman is evaluated during the follicular phase of the menstrual cycle. A diagram of ovarian steroidogenesis shows that one ovarian cell type responds mainly to luteinizing hormone (LH) and produces androgens, while another responds mainly to follicle-stimulating hormone (FSH) and converts these androgens into estradiol by the enzyme aromatase. Which of the following is the correct pairing?",
    options: [
      "Granulosa cells produce androgens under luteinizing hormone; theca cells convert them to estradiol under follicle-stimulating hormone",
      "Theca interna cells produce androgens under luteinizing hormone; granulosa cells convert them to estradiol under follicle-stimulating hormone",
      "Corpus luteum produces androgens under follicle-stimulating hormone; granulosa cells convert them to progesterone under luteinizing hormone",
      "Theca externa cells produce estradiol directly under prolactin; granulosa cells convert it to estrone under oxytocin",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Theca interna cells produce androgens under luteinizing hormone; granulosa cells convert them to estradiol under follicle-stimulating hormone",
  },
  {
    id: 16,
    image: "",
    question:
      "A 29-year-old woman in the luteal phase has a slight rise in basal body temperature. The dominant ovarian hormone at this time also reduces myometrial sensitivity to oxytocin and supports lobuloalveolar development of the breast. Which of the following hormones is most likely responsible?",
    options: ["Estradiol", "Progesterone", "Prolactin", "Relaxin"],
    answerIndex: 1,
    correctAnswerText: "Progesterone",
  },
  {
    id: 17,
    image: "",
    question:
      "A 16-year-old boy is evaluated for delayed puberty. Testicular biopsy shows preserved spermatogonia but failure of progression beyond the spermatocyte stage. Serum androgen level is low-normal, and Sertoli cell function is relatively preserved. Which of the following hormones is most directly required for progression of spermatogenesis beyond this stage?",
    options: [
      "Follicle-stimulating hormone",
      "Luteinizing hormone",
      "Prolactin",
      "Oxytocin",
    ],
    answerIndex: 1,
    correctAnswerText: "Luteinizing hormone",
  },
  {
    id: 18,
    image: "",
    question:
      "A man with infertility evaluation has normal testicular volume but low sperm motility. Semen analysis reveals normal sperm count and normal fructose content. Which of the following events normally occurs in the female reproductive tract and enables sperm to fertilize the ovum?",
    options: [
      "Capacitation",
      "Spermiation",
      "Conversion of testosterone to dihydrotestosterone",
      "Secretion of androgen-binding protein",
    ],
    answerIndex: 0,
    correctAnswerText: "Capacitation",
  },
  {
    id: 19,
    image: "",
    question:
      "A 45-year-old woman with hypocalcemia is found to have elevated parathyroid hormone (PTH) levels. Which of the following is the most likely immediate renal action of parathyroid hormone?",
    options: [
      "Increased phosphate reabsorption in the proximal convoluted tubule",
      "Decreased calcium reabsorption in the distal nephron",
      "Decreased phosphate reabsorption in the proximal convoluted tubule",
      "Decreased formation of active vitamin D3 in the kidney",
    ],
    answerIndex: 2,
    correctAnswerText:
      "Decreased phosphate reabsorption in the proximal convoluted tubule",
  },
  {
    id: 20,
    image: "",
    question:
      "A healthy person is exposed to sunlight, and vitamin D metabolism proceeds normally. Which of the following correctly describes the pathway and major action of active vitamin D3?",
    options: [
      "Skin converts 7-dehydrocholesterol to cholecalciferol, liver forms 25-hydroxycholecalciferol, kidney forms 1,25-dihydroxycholecalciferol, which increases intestinal calcium and phosphate absorption",
      "Skin converts cholesterol directly to calcitriol, which decreases intestinal calcium absorption and increases renal calcium loss",
      "Liver converts 7-dehydrocholesterol to cholecalciferol, kidney converts it to calcitonin, which promotes phosphate excretion",
      "Kidney forms 25-hydroxycholecalciferol first, and liver converts it into inactive vitamin D, which mainly lowers serum calcium",
    ],
    answerIndex: 0,
    correctAnswerText:
      "Skin converts 7-dehydrocholesterol to cholecalciferol, liver forms 25-hydroxycholecalciferol, kidney forms 1,25-dihydroxycholecalciferol, which increases intestinal calcium and phosphate absorption",
  },
  {
    id: 21,
    image: "",
    question:
      "A 22-year-old healthy student has just eaten a carbohydrate-rich meal. A pancreatic hormone is released from cells that contain zinc-rich granules and acts through a receptor tyrosine kinase to promote glycogen synthesis, glycolysis, lipogenesis, and potassium entry into cells. Which of the following best identifies this hormone and its receptor mechanism?",
    options: [
      "Glucagon acting through Gs protein-coupled receptor",
      "Insulin acting through receptor tyrosine kinase",
      "Somatostatin acting through Gi protein-coupled receptor",
      "Cortisol acting through intracellular nuclear receptor",
    ],
    answerIndex: 1,
    correctAnswerText: "Insulin acting through receptor tyrosine kinase",
  },
  {
    id: 22,
    image: "",
    question:
      "A fasting patient develops hypoglycemia. A pancreatic hormone is released that acts mainly on the liver to increase blood glucose by stimulating glycogen breakdown, gluconeogenesis, and lipolysis. Which of the following hormones is most likely responsible?",
    options: ["Insulin", "Glucagon", "Somatostatin", "C-peptide"],
    answerIndex: 1,
    correctAnswerText: "Glucagon",
  },
  {
    id: 23,
    image: "",
    question:
      "A 32-year-old man with primary hyperaldosteronism has hypertension and hypokalemia. Which of the following adrenal cortical zones is the source of the excess hormone?",
    options: [
      "Zona glomerulosa",
      "Zona fasciculata",
      "Zona reticularis",
      "Adrenal medulla",
    ],
    answerIndex: 0,
    correctAnswerText: "Zona glomerulosa",
  },
  {
    id: 24,
    image: "",
    question:
      "A healthy adult has a hormone that reaches its highest plasma concentration in the early morning and lowest concentration around midnight. This hormone also increases blood glucose by stimulating gluconeogenesis and antagonizing insulin action in peripheral tissues. Which hormone is being described?",
    options: [
      "Aldosterone",
      "Cortisol",
      "Dehydroepiandrosterone",
      "Epinephrine",
    ],
    answerIndex: 1,
    correctAnswerText: "Cortisol",
  },
  {
    id: 25,
    image: "",
    question: "A physiologist wants to calculate intracellular fluid volume in a normal adult by using two indicator dilution methods and then deriving the value indirectly. Which pair of indicators is most appropriate?",
    options: [
      "Heavy water and inulin",
      "Inulin and radioiodinated albumin",
      "Sodium-22 and inulin",
      "Radioiodinated albumin and Evans blue"
    ],
    answerIndex: 0,
    correctAnswerText: "Heavy water and inulin"
  },
  {
    id: 26,
    image: "",
    question: "Which of the following best describes the function of the renal outer medullary potassium channel (ROMK) in renal tubular physiology?",
    options: [
      "It secretes potassium through a selective potassium channel",
      "It cotransports sodium and potassium together across the apical membrane",
      "It exchanges sodium for potassium across the basolateral membrane",
      "It acts as a water channel regulated by antidiuretic hormone"
    ],
    answerIndex: 0,
    correctAnswerText: "It secretes potassium through a selective potassium channel"
  },
  {
    id: 27,
    image: "",
    question:
      "A 28-year-old woman with Graves disease is started on a drug that inhibits thyroid peroxidase and thereby blocks iodide oxidation and organification within the thyroid follicular cell-colloid interface. Which of the following drugs acts by this mechanism?",
    options: [
      "Propranolol",
      "Carbimazole",
      "Levothyroxine",
      "Potassium iodide in physiologic dose",
    ],
    answerIndex: 1,
    correctAnswerText: "Carbimazole",
  },
  {
    id: 28,
    image: "",
    question:
      "A healthy adult is exposed to prolonged cold. Which of the following endocrine responses is most likely to occur to help increase heat production?",
    options: [
      "Decreased thyrotropin-releasing hormone secretion",
      "Increased thyrotropin-releasing hormone secretion",
      "Decreased conversion of thyroxine to triiodothyronine in peripheral tissues",
      "Increased thyroxine-binding globulin causing rise in free thyroxine",
    ],
    answerIndex: 1,
    correctAnswerText: "Increased thyrotropin-releasing hormone secretion",
  },
  {
    id: 29,
    image: "",
    question:
      "A child with growth failure is found to have isolated deficiency of a pituitary hormone that normally increases amino acid uptake, promotes protein synthesis, mobilizes fat for energy use, decreases glucose utilization, and stimulates the liver to produce insulin-like growth factor 1. Which of the following hormones is most likely deficient?",
    options: [
      "Adrenocorticotropic hormone",
      "Growth hormone",
      "Oxytocin",
      "Vasopressin",
    ],
    answerIndex: 1,
    correctAnswerText: "Growth hormone",
  },
  {
    id: 30,
    image: "",
    question:
      "A patient with dehydration has increased plasma osmolarity. Which of the following posterior pituitary hormone-receptor combinations is most responsible for increasing water reabsorption in the kidney?",
    options: [
      "Oxytocin acting on Gq-coupled receptors in uterine smooth muscle",
      "Vasopressin acting on V2 receptors to increase cyclic adenosine monophosphate and aquaporin-2 insertion",
      "Vasopressin acting on V1 receptors to increase aquaporin-2 insertion in collecting ducts",
      "Oxytocin acting on V2 receptors in the renal medulla",
    ],
    answerIndex: 1,
    correctAnswerText:
      "Vasopressin acting on V2 receptors to increase cyclic adenosine monophosphate and aquaporin-2 insertion",
  },
  {
    id: 31,
    image: "",
    question:
      "A healthy person is dehydrated after prolonged water deprivation. Which of the following renal mechanisms is most important for generating the hyperosmotic renal medulla required for concentrated urine formation?",
    options: [
      "Active sodium chloride reabsorption in the thick ascending limb of loop of Henle",
      "Active water reabsorption in the thick ascending limb of loop of Henle",
      "Secretion of urea into the proximal convoluted tubule",
      "Passive sodium reabsorption in the descending limb of loop of Henle",
    ],
    answerIndex: 0,
    correctAnswerText:
      "Active sodium chloride reabsorption in the thick ascending limb of loop of Henle",
  },
  {
    id: 32,
    image: "",
    question:
      "A patient drinks a large volume of water rapidly, producing very dilute urine. In this setting, the free water clearance is most likely to be:",
    options: [
      "Negative, because excess solute is excreted relative to water",
      "Zero, because water excretion always equals solute excretion",
      "Positive, because solute-free water is being excreted",
      "Unchanged, because free water clearance depends only on glomerular filtration rate"
    ],
    answerIndex: 2,
    correctAnswerText: "Positive, because solute-free water is being excreted"
  },
  {
    id: 33,
    image: "",
    question:
      "A researcher wants to measure the glomerular filtration rate (GFR) using a substance that is freely filtered at the glomerulus and is neither reabsorbed nor secreted by the renal tubules. Which of the following substances is the best standard choice?",
    options: [
      "Para-aminohippuric acid",
      "Inulin",
      "Glucose",
      "Urea"
    ],
    answerIndex: 1,
    correctAnswerText: "Inulin"
  },
  {
    id: 34,
    image: "",
    question:
      "A 24-year-old man has severe dehydration after acute gastroenteritis. His kidneys respond by increasing sodium and water conservation. Which of the following is the most important immediate renal change that helps increase tubular sodium reabsorption?",
    options: [
      "Increased glomerular hydrostatic pressure causing increased sodium excretion",
      "Increased filtration fraction raising peritubular capillary oncotic pressure",
      "Decreased angiotensin II causing reduced proximal tubular sodium reabsorption",
      "Decreased aldosterone causing reduced distal sodium reabsorption"
    ],
    answerIndex: 1,
    correctAnswerText: "Increased filtration fraction raising peritubular capillary oncotic pressure"
  },
  {
    id: 35,
    image: "",
    question:
      "A patient with adrenal insufficiency develops salt wasting and volume depletion. Which of the following hormones normally acts on the distal nephron to increase epithelial sodium channel activity and sodium-potassium adenosine triphosphatase activity, thereby increasing sodium reabsorption?",
    options: [
      "Atrial natriuretic peptide",
      "Aldosterone",
      "Angiotensin II",
      "Norepinephrine"
    ],
    answerIndex: 1,
    correctAnswerText: "Aldosterone"
  },
  {
    id: 36,
    image: "",
    question:
      "A healthy person has a substance in tubular fluid whose tubular fluid to plasma concentration ratio (TF/P ratio) falls rapidly toward zero in the proximal tubule because it is almost completely reabsorbed early. Which of the following substances best fits this description?",
    options: [
      "Inulin",
      "Para-aminohippuric acid",
      "Glucose",
      "Creatinine"
    ],
    answerIndex: 2,
    correctAnswerText: "Glucose"
  },
  {
    id: 37,
    image: "",
    question:
      "A dehydrated patient has high antidiuretic hormone (ADH) levels. Which of the following nephron segments is normally impermeable to water and is therefore known as an important diluting segment?",
    options: [
      "Descending limb of loop of Henle",
      "Thick ascending limb of loop of Henle",
      "Medullary collecting duct",
      "Proximal convoluted tubule"
    ],
    answerIndex: 1,
    correctAnswerText: "Thick ascending limb of loop of Henle"
  },
  {
    id: 38,
    image: "",
    question:
      "A healthy adult has a mean arterial pressure that suddenly rises from 90 millimeters of mercury to 120 millimeters of mercury. Over a short range, the kidney maintains nearly constant renal blood flow and glomerular filtration rate despite this change. Which intrinsic renal mechanism is primarily responsible for this autoregulation by causing stretch-induced constriction of the afferent arteriole?",
    options: [
      "Tubuloglomerular feedback",
      "Myogenic mechanism",
      "Renin-angiotensin-aldosterone system",
      "Sympathetic stimulation"
    ],
    answerIndex: 1,
    correctAnswerText: "Myogenic mechanism"
  },
  {
    id: 39,
    image: "",
    question:
      "A patient has a fall in renal perfusion pressure. The macula densa senses reduced sodium chloride delivery and triggers changes that help restore glomerular filtration rate. Which of the following combinations is most likely to occur?",
    options: [
      "Afferent arteriolar constriction with decreased renin release",
      "Afferent arteriolar dilation with increased renin release",
      "Efferent arteriolar dilation with decreased filtration fraction",
      "Afferent arteriolar constriction with increased adenosine release"
    ],
    answerIndex: 1,
    correctAnswerText: "Afferent arteriolar dilation with increased renin release"
  },
  {
    id: 40,
    image: "",
    question:
      "A healthy adult has a glomerular filtration rate (GFR) of 125 milliliters per minute and an effective renal plasma flow (RPF) of 625 milliliters per minute. What is the filtration fraction?",
    options: [
      "10 percent",
      "20 percent",
      "40 percent",
      "80 percent"
    ],
    answerIndex: 1,
    correctAnswerText: "20 percent"
  },
  {
    id: 41,
    image: "",
    question:
      "Which of the following proteins is most important for maintaining the slit diaphragm of podocytes in the glomerular filtration barrier?",
    options: [
      "Heparan sulfate",
      "Nephrin",
      "Collagen type I",
      "Renin"
    ],
    answerIndex: 1,
    correctAnswerText: "Nephrin"
  },
  {
    id: 42,
    image: "",
    question:
      "A healthy person is quietly resting and then suddenly starts running. Which of the following brainstem regions is the primary rhythm generator for normal quiet inspiration?",
    options: [
      "Pneumotaxic center in the upper pons",
      "Apneustic center in the lower pons",
      "Dorsal respiratory group in the medulla",
      "Peripheral chemoreceptors in the carotid body"
    ],
    answerIndex: 2,
    correctAnswerText: "Dorsal respiratory group in the medulla"
  },
  {
    id: 43,
    image: "",
    question:
      "A patient with chronic obstructive pulmonary disease develops a marked fall in arterial partial pressure of oxygen. Which of the following receptors is most strongly stimulated to increase ventilation in this situation?",
    options: [
      "Central chemoreceptors responding to cerebrospinal fluid hydrogen ion only",
      "Peripheral chemoreceptors in the carotid body",
      "Pulmonary stretch receptors in bronchi",
      "Juxtacapillary receptors in alveolar walls"
    ],
    answerIndex: 1,
    correctAnswerText: "Peripheral chemoreceptors in the carotid body"
  },
  {
    id: 44,
    image: "",
    question:
      "A healthy person is exercising vigorously. In the active skeletal muscles, increased carbon dioxide, increased hydrogen ion concentration, increased temperature, and increased 2,3-bisphosphoglycerate shift the oxyhemoglobin dissociation curve to the right. What is the main effect of this shift?",
    options: [
      "Increased affinity of hemoglobin for oxygen, reducing oxygen unloading",
      "Decreased affinity of hemoglobin for oxygen, promoting oxygen unloading",
      "Increased oxygen binding only in the lungs with no tissue effect",
      "Conversion of most oxygen transport from hemoglobin-bound form to dissolved form"
    ],
    answerIndex: 1,
    correctAnswerText: "Decreased affinity of hemoglobin for oxygen, promoting oxygen unloading"
  },
  {
    id: 45,
    image: "",
    question:
      "Most carbon dioxide produced by tissues is transported in venous blood in which of the following forms?",
    options: [
      "Dissolved carbon dioxide in plasma",
      "Carbaminohemoglobin",
      "Bicarbonate ion",
      "Carbon monoxide bound to hemoglobin"
    ],
    answerIndex: 2,
    correctAnswerText: "Bicarbonate ion"
  },
  {
    id: 46,
    image: "",
    question:
      "A healthy person breathes room air at sea level. After humidification in the airways and mixing with residual alveolar gas, the partial pressure of oxygen in the alveoli becomes much lower than that in dry atmospheric air. Which of the following is the most likely normal alveolar partial pressure of oxygen?",
    options: [
      "40 millimeters of mercury",
      "60 millimeters of mercury",
      "104 millimeters of mercury",
      "159 millimeters of mercury"
    ],
    answerIndex: 2,
    correctAnswerText: "104 millimeters of mercury"
  },
  {
    id: 47,
    image: "",
    question:
      "A patient with pulmonary fibrosis develops thickening of the alveolar-capillary membrane. Which of the following changes would most directly reduce the rate of diffusion of oxygen across the respiratory membrane according to Fick’s law?",
    options: [
      "Increased surface area of alveoli",
      "Increased pressure gradient for oxygen",
      "Decreased membrane thickness",
      "Increased membrane thickness"
    ],
    answerIndex: 3,
    correctAnswerText: "Increased membrane thickness"
  },
  {
    id: 48,
    image: "",
    question:
      "A healthy person standing upright has the greatest alveolar ventilation at the base of the lung, but the ventilation-perfusion ratio is highest at the apex. Which of the following best explains why the apex has a higher ventilation-perfusion ratio?",
    options: [
      "Ventilation is absent at the apex while blood flow is normal",
      "Both ventilation and blood flow are highest at the apex",
      "Blood flow falls more than ventilation toward the apex",
      "Perfusion is greater than ventilation at the apex"
    ],
    answerIndex: 2,
    correctAnswerText: "Blood flow falls more than ventilation toward the apex"
  },
  {
    id: 49,
    image: "",
    question:
      "In an upright person, the lower part of the lung normally shows continuous pulmonary blood flow because arterial pressure and venous pressure both exceed alveolar pressure. Which of the following West lung zones does this represent?",
    options: [
      "Zone 1",
      "Zone 2",
      "Zone 3",
      "Zone 4"
    ],
    answerIndex: 2,
    correctAnswerText: "Zone 3"
  },
  {
    id: 50,
    image: "",
    question:
      "A 68-year-old man with long-standing smoking history has hyperinflated lungs and reduced elastic recoil. His lungs inflate easily with a small change in transpulmonary pressure. Which of the following best describes the change in lung compliance in this patient?",
    options: [
      "Decreased compliance because elastic recoil is increased",
      "Increased compliance because elastic tissue is lost",
      "Normal compliance because surface tension is unchanged",
      "Decreased compliance because airway resistance is increased"
    ],
    answerIndex: 1,
    correctAnswerText: "Increased compliance because elastic tissue is lost"
  },
  {
    id: 51,
    image: "",
    question:
      "During a physiology demonstration, a saline-filled lung is compared with an air-filled lung. The saline-filled lung is much easier to inflate. Which of the following best explains this finding?",
    options: [
      "Saline increases elastic recoil of the lung tissue",
      "Saline eliminates alveolar surface tension",
      "Saline decreases chest wall compliance",
      "Saline increases airway resistance"
    ],
    answerIndex: 1,
    correctAnswerText: "Saline eliminates alveolar surface tension"
  },
  {
    id: 52,
    image: "",
    question:
      "A patient with xerostomia is evaluated for salivary gland function. Which of the following statements about normal saliva is correct?",
    options: [
      "Saliva is acidic, with pH usually around 3 to 4",
      "Saliva is secreted only by the parotid gland",
      "Saliva contains potassium concentration higher than plasma and is usually hypotonic",
      "Salivary secretion is stimulated only by sympathetic fibers"
    ],
    answerIndex: 2,
    correctAnswerText: "Saliva contains potassium concentration higher than plasma and is usually hypotonic"
  },
  {
    id: 53,
    image: "",
    question:
      "A patient with peptic ulcer disease has increased gastric acid secretion. Which of the following is the strongest direct stimulant of parietal cell hydrochloric acid secretion through the histamine H2 receptor pathway?",
    options: [
      "Somatostatin",
      "Secretin",
      "Histamine released from enterochromaffin-like cells",
      "Intrinsic factor"
    ],
    answerIndex: 2,
    correctAnswerText: "Histamine released from enterochromaffin-like cells"
  },
  {
    id: 54,
    image: "",
    question:
      "A patient with difficulty swallowing undergoes a barium swallow study. The bolus enters the pharynx, and swallowing is then completed automatically even without conscious effort. Which of the following best explains this process?",
    options: [
      "The pharyngeal phase of swallowing is voluntary and controlled by the cerebral cortex alone",
      "The pharyngeal phase of swallowing is involuntary and is coordinated by a swallowing center in the medulla and lower pons",
      "The esophageal phase begins before the pharyngeal phase is completed and is mediated only by the enteric nervous system",
      "Deglutition occurs only by primary peristalsis and never involves secondary peristalsis"
    ],
    answerIndex: 1,
    correctAnswerText: "The pharyngeal phase of swallowing is involuntary and is coordinated by a swallowing center in the medulla and lower pons"
  },
  {
    id: 55,
    image: "",
    question:
      "A patient is admitted after a cervical spinal cord injury. During evaluation of anorectal function, rectal distension produces relaxation of the internal anal sphincter, but voluntary control of defecation is lost. Which of the following structures is composed of smooth muscle and normally remains tonically contracted until the defecation reflex is activated?",
    options: [
      "External anal sphincter",
      "Internal anal sphincter",
      "Puborectalis muscle",
      "Diaphragm"
    ],
    answerIndex: 1,
    correctAnswerText: "Internal anal sphincter"
  },
  {
    id: 56,
    image: "",
    question:
      "A healthy adult is studied for gastrointestinal motility. Rhythmic contractions of the gut are found to depend on slow waves generated by pacemaker cells, and the highest basal electrical rhythm is recorded in the duodenum. Which of the following is the most likely frequency of the basal electrical rhythm in the duodenum?",
    options: [
      "3 per minute",
      "6 per minute",
      "9 per minute",
      "12 per minute"
    ],
    answerIndex: 3,
    correctAnswerText: "12 per minute"
  },
  {
    id: 57,
    image: "",
    question:
      "A patient eats a large meal, causing distension of the stomach. Soon afterward, peristaltic activity increases in the ileum, helping propel intestinal contents toward the cecum. Which of the following reflexes best explains this response?",
    options: [
      "Enterogastric reflex",
      "Gastroileal reflex",
      "Colonoileal reflex",
      "Renointestinal reflex"
    ],
    answerIndex: 1,
    correctAnswerText: "Gastroileal reflex"
  },
  {
    id: 58,
    image: "",
    question:
      "A healthy adult suddenly stands up from a lying position. Within seconds, stretch receptors in the carotid sinus detect the fall in arterial pressure and trigger reflex sympathetic activation. Which of the following changes is most likely to occur in the baroreceptor reflex?",
    options: [
      "Increased carotid sinus firing with increased vagal discharge",
      "Decreased carotid sinus firing with increased sympathetic outflow",
      "Increased aortic arch firing with decreased heart rate",
      "Decreased medullary vasomotor center activity with vasodilation"
    ],
    answerIndex: 1,
    correctAnswerText: "Decreased carotid sinus firing with increased sympathetic outflow"
  },
  {
    id: 59,
    image: "",
    question:
      "A patient develops increased venous return after rapid intravenous fluid infusion. Stretch receptors in the right atrium are activated, producing a reflex increase in heart rate. Which of the following best identifies this reflex?",
    options: [
      "Baroreceptor reflex",
      "Bainbridge reflex",
      "Cushing reflex",
      "Chemoreceptor reflex"
    ],
    answerIndex: 1,
    correctAnswerText: "Bainbridge reflex"
  },
  {
    id: 60,
    image: "",
    question:
      "A medium-sized artery develops a 50 percent reduction in radius due to vasoconstriction. According to Poiseuille’s law, which of the following changes is most likely to occur if all other factors remain constant?",
    options: [
      "Resistance decreases to one-fourth",
      "Resistance increases 16-fold",
      "Flow increases 16-fold",
      "Conductance increases 8-fold"
    ],
    answerIndex: 1,
    correctAnswerText: "Resistance increases 16-fold"
  },
  {
    id: 61,
    image: "",
    question:
      "A dilated blood vessel has increased radius without a proportional increase in wall thickness. According to Laplace law, which of the following changes is most likely?",
    options: [
      "Wall tension decreases",
      "Wall tension remains unchanged",
      "Wall tension increases",
      "Resistance increases because radius has increased"
    ],
    answerIndex: 2,
    correctAnswerText: "Wall tension increases"
  },
  {
    id: 62,
    image: "",
    question:
      "A 60-year-old man with long-standing hypertension is found to have a stiff aorta on vascular assessment. Compared with a healthy young adult, his aorta shows less change in volume for a given rise in pressure. Which of the following best describes this vascular property?",
    options: [
      "Increased compliance",
      "Decreased compliance",
      "Increased conductance",
      "Decreased Reynolds number"
    ],
    answerIndex: 1,
    correctAnswerText: "Decreased compliance"
  },
  {
    id: 63,
    image: "",
    question:
      "A pulse wave generated in the aorta reaches the radial artery later and often becomes sharper as it travels toward the periphery. Which of the following best explains why the pulse in smaller peripheral arteries is delayed relative to the aorta?",
    options: [
      "Blood itself takes a long time to flow from the aorta to the radial artery",
      "Peripheral arteries have lower resistance than the aorta",
      "A pressure wave is transmitted progressively along the arterial wall",
      "Capillary blood flow directly determines arterial pulse timing"
    ],
    answerIndex: 2,
    correctAnswerText: "A pressure wave is transmitted progressively along the arterial wall"
  },
  {
    id: 64,
    image: "",
    question:
      "A healthy adult is undergoing cardiac catheterization. At the beginning of ventricular systole, both the atrioventricular and semilunar valves are closed, ventricular pressure rises rapidly, and ventricular volume remains constant. Which phase of the cardiac cycle is this?",
    options: [
      "Rapid ventricular filling",
      "Isovolumetric contraction",
      "Rapid ejection",
      "Isovolumetric relaxation"
    ],
    answerIndex: 1,
    correctAnswerText: "Isovolumetric contraction"
  },
  {
    id: 65,
    image: "",
    question:
      "A healthy young adult has a left ventricular end-diastolic volume (EDV) of 120 milliliters and an end-systolic volume (ESV) of 50 milliliters. What is the stroke volume?",
    options: [
      "50 milliliters",
      "60 milliliters",
      "70 milliliters",
      "120 milliliters"
    ],
    answerIndex: 2,
    correctAnswerText: "70 milliliters"
  },
  {
    id: 66,
    image: "",
    question:
      "A patient is found to have a mutation in the funny current (If) channel of sinoatrial nodal cells. Which phase of the pacemaker action potential is most directly affected by this abnormality?",
    options: [
      "Phase 0 depolarization",
      "Phase 3 repolarization",
      "Phase 4 spontaneous diastolic depolarization",
      "Plateau phase"
    ],
    answerIndex: 2,
    correctAnswerText: "Phase 4 spontaneous diastolic depolarization"
  },
  {
    id: 67,
    image: "",
    question:
      "A patient develops complete atrioventricular block. Which part of the cardiac conducting system normally shows the slowest conduction velocity, thereby allowing time for ventricular filling before ventricular contraction?",
    options: [
      "Sinoatrial node",
      "Atrioventricular node",
      "Purkinje fibers",
      "Bundle branches"
    ],
    answerIndex: 1,
    correctAnswerText: "Atrioventricular node"
  },
  {
    id: 68,
    image: "",
    question:
      "A patient is brought to the emergency department after a generalized tonic-clonic seizure. During sleep staging later that night, the electroencephalogram shows a pattern of high-amplitude, low-frequency waves typical of deep sleep. Which of the following best describes this sleep stage?",
    options: [
      "Rapid eye movement sleep with dreaming and muscle atonia",
      "Non-rapid eye movement stage 3 with delta waves",
      "Non-rapid eye movement stage 1 with theta waves",
      "Awake relaxed state with alpha waves"
    ],
    answerIndex: 1,
    correctAnswerText: "Non-rapid eye movement stage 3 with delta waves"
  },
  {
    id: 69,
    image: "",
    question:
      "A patient undergoes a sleep study and is found to have episodes of rapid eye movements, vivid dreaming, loss of muscle tone, irregular heart rate, and irregular respiration. Which of the following is the most likely diagnosis of this sleep phase?",
    options: [
      "Non-rapid eye movement stage 2 sleep",
      "Non-rapid eye movement stage 3 sleep",
      "Rapid eye movement sleep",
      "Awake state with alpha rhythm"
    ],
    answerIndex: 2,
    correctAnswerText: "Rapid eye movement sleep"
  },
  {
    id: 70,
    image: "",
    question:
      "A neurologist taps the patellar tendon of a seated patient. The quadriceps contracts immediately through a monosynaptic spinal reflex. Which receptor and afferent fiber are primarily responsible for initiating this response?",
    options: [
      "Golgi tendon organ with type Ib afferent fiber",
      "Muscle spindle with type Ia afferent fiber",
      "Muscle spindle with type II afferent fiber",
      "Free nerve ending with type A-delta afferent fiber"
    ],
    answerIndex: 1,
    correctAnswerText: "Muscle spindle with type Ia afferent fiber"
  },
  {
    id: 71,
    image: "",
    question:
      "During a voluntary movement, both alpha and gamma motor neurons are activated together so that muscle spindles remain sensitive even while the muscle shortens. What is this mechanism called?",
    options: [
      "Reciprocal inhibition",
      "Renshaw inhibition",
      "Alpha-gamma coactivation",
      "Clasp-knife reflex"
    ],
    answerIndex: 2,
    correctAnswerText: "Alpha-gamma coactivation"
  },
  {
    id: 72,
    image: "",
    question:
      "A patient steps on a sharp pin and immediately feels a well-localized pricking pain, followed a moment later by a diffuse burning pain. Which of the following combinations best matches the pathway and neurotransmitter responsible for the first sensation?",
    options: [
      "Paleospinothalamic pathway with C fibers using Substance P",
      "Neospinothalamic pathway with A-delta fibers using glutamate",
      "Dorsal column pathway with A-beta fibers using gamma-aminobutyric acid",
      "Spinocerebellar pathway with C fibers using glycine"
    ],
    answerIndex: 1,
    correctAnswerText: "Neospinothalamic pathway with A-delta fibers using glutamate"
  },
  {
    id: 73,
    image: "",
    question:
      "A 40-year-old man has loss of vibration sense and conscious proprioception in the right lower limb below a spinal cord lesion. Pain and temperature are preserved. Which of the following pathways is most likely affected?",
    options: [
      "Spinothalamic tract",
      "Dorsal column-medial lemniscus pathway",
      "Spinocerebellar tract",
      "Corticospinal tract"
    ],
    answerIndex: 1,
    correctAnswerText: "Dorsal column-medial lemniscus pathway"
  },
  {
    id: 74,
    image: "",
    question:
      "A patient with Parkinson disease is being taught about the major neurotransmitter pathways in the brain. Degeneration of neurons in a midbrain nucleus has reduced a neurotransmitter that is important for movement control. Which of the following neurotransmitter-nucleus pairs is correctly matched?",
    options: [
      "Serotonin — Locus coeruleus",
      "Dopamine — Substantia nigra",
      "Norepinephrine — Median raphe nucleus",
      "Glycine — Basal ganglia"
    ],
    answerIndex: 1,
    correctAnswerText: "Dopamine — Substantia nigra"
  },
  {
    id: 75,
    image: "",
    question:
      "A neuron releases a transmitter that is synthesized in the presynaptic terminal cytoplasm, packed into vesicles, and rapidly acts at the neuromuscular junction as well as in all preganglionic autonomic fibers. Which of the following neurotransmitters best fits this description?",
    options: [
      "Nitric oxide",
      "Acetylcholine",
      "Substance P",
      "Endorphin"
    ],
    answerIndex: 1,
    correctAnswerText: "Acetylcholine"
  },
  {
    id: 76,
    image: "",
    question:
      "A 32-year-old woman develops fluctuating ptosis and diplopia that worsen by evening. Repetitive use of muscles makes weakness more apparent, but strength improves transiently after rest. Which of the following is the most likely underlying defect?",
    options: [
      "Antibodies against presynaptic voltage-gated calcium channels",
      "Antibodies against postsynaptic nicotinic acetylcholine receptors",
      "Destruction of T-SNARE proteins in inhibitory interneurons",
      "Block of acetylcholinesterase at the neuromuscular junction"
    ],
    answerIndex: 1,
    correctAnswerText: "Antibodies against postsynaptic nicotinic acetylcholine receptors"
  },
  {
    id: 77,
    image: "",
    question:
      "A patient with small cell lung carcinoma develops proximal muscle weakness. Repetitive muscle use temporarily improves strength. The underlying antibodies most likely target which of the following structures?",
    options: [
      "Postsynaptic nicotinic acetylcholine receptor",
      "Presynaptic voltage-gated calcium channel",
      "Acetylcholinesterase enzyme in synaptic cleft",
      "Ryanodine receptor in sarcoplasmic reticulum"
    ],
    answerIndex: 1,
    correctAnswerText: "Presynaptic voltage-gated calcium channel"
  },
  {
    id: 78,
    image: "",
    question:
      "A skeletal muscle is stimulated repeatedly before it has completely relaxed from the previous contraction, causing a progressive rise in tension. Which of the following best describes this phenomenon?",
    options: [
      "Complete tetanus",
      "Incomplete summation",
      "Isometric contraction",
      "Refractory relaxation"
    ],
    answerIndex: 1,
    correctAnswerText: "Incomplete summation"
  },
  {
    id: 79,
    image: "",
    question:
      "A marathon runner’s calf biopsy shows fibers with high oxidative capacity, abundant myoglobin, small diameter, slow myosin adenosine triphosphatase activity, and marked resistance to fatigue. Which type of muscle fiber is most likely predominant?",
    options: [
      "Type I fiber",
      "Type IIA fiber",
      "Type IIB fiber",
      "Type IIX glycolytic-only fiber"
    ],
    answerIndex: 0,
    correctAnswerText: "Type I fiber"
  },
  {
    id: 80,
    image: "",
    question:
      "A patient sustains a crush injury to a peripheral nerve. Distal to the site of injury, the axon and myelin degenerate, but the endoneurial tube remains intact, allowing a good chance of recovery. According to Seddon classification, which type of nerve injury is this?",
    options: [
      "Neurapraxia",
      "Axonotmesis",
      "Neurotmesis",
      "Radiculopathy"
    ],
    answerIndex: 1,
    correctAnswerText: "Axonotmesis"
  },
  {
    id: 81,
    image: "",
    question:
      "A developing sensory neuron takes up a target-derived growth factor by retrograde transport to its cell body, where it promotes survival and differentiation. Which of the following neurotrophins is most closely associated with survival of sympathetic neurons and pain sensory neurons?",
    options: [
      "Brain-derived neurotrophic factor",
      "Neurotrophin-3",
      "Neurotrophin-4/5",
      "Nerve growth factor"
    ],
    answerIndex: 3,
    correctAnswerText: "Nerve growth factor"
  },
  {
    id: 82,
    image: "",
    question:
      "A patient with severe hypocalcemia develops muscle cramps and increased neuromuscular irritability. Which of the following best explains the increase in membrane excitability in this condition?",
    options: [
      "Increased opening of voltage-gated sodium channels due to reduced threshold",
      "Increased resting membrane potential due to more potassium efflux",
      "Decreased sodium channel opening due to membrane stabilization",
      "Increased chloride conductance causing hyperpolarization"
    ],
    answerIndex: 0,
    correctAnswerText: "Increased opening of voltage-gated sodium channels due to reduced threshold"
  },
  {
    id: 83,
    image: "",
    question:
      "A myelinated peripheral nerve fiber is stimulated at one point. The action potential is regenerated only at the nodes of Ranvier, and conduction becomes much faster than in an unmyelinated fiber. Which of the following best describes this mechanism?",
    options: [
      "Continuous conduction through every segment of membrane",
      "Saltatory conduction with jumping of action potential from node to node",
      "Electrotonic spread without regeneration",
      "Retrograde conduction due to sodium channel inactivation"
    ],
    answerIndex: 1,
    correctAnswerText: "Saltatory conduction with jumping of action potential from node to node"
  },
  {
    id: 84,
    image: "",
    question:
      "A young woman develops recurrent episodes of optic neuritis, sensory symptoms, and weakness. Magnetic resonance imaging shows multiple central nervous system demyelinating plaques. Which of the following cells are primarily responsible for forming myelin in the central nervous system and are therefore the main cells affected in this disorder?",
    options: [
      "Schwann cells",
      "Oligodendrocytes",
      "Astrocytes",
      "Microglia"
    ],
    answerIndex: 1,
    correctAnswerText: "Oligodendrocytes"
  },
  {
    id: 85,
    image: "",
    question:
      "A cutaneous sensory neuron carries a signal from skin to spinal cord through a pseudounipolar neuron. In this type of neuron, the site where the propagated action potential is most likely to begin is:",
    options: [
      "Cell body in the dorsal root ganglion",
      "Initial segment of the axon near the soma",
      "First node of Ranvier",
      "Dendritic receptor ending only"
    ],
    answerIndex: 2,
    correctAnswerText: "First node of Ranvier"
  },
  {
    id: 86,
    image: "",
    question: "A 24-year-old medical student is undergoing a physiology viva. The examiner asks which ion contributes most to the resting membrane potential of a typical neuron. The student recalls that at rest, the membrane is far more permeable to one specific ion because of abundant leak channels. Which of the following is the most important ion responsible for establishing the resting membrane potential?",
    options: [
      "Sodium (Na+)",
      "Potassium (K+)",
      "Calcium (Ca2+)",
      "Chloride (Cl−)"
    ],
    answerIndex: 1,
    correctAnswerText: "Potassium (K+)"
  },
  {
    id: 87,
    image: "",
    question: "A 62-year-old right-handed man suddenly develops non-fluent, effortful speech after an ischemic stroke. He understands spoken commands well and follows them appropriately, but he is unable to produce fluent language. The lesion most likely involves a cortical region in the dominant hemisphere supplied by the superior division of the middle cerebral artery. Which of the following functional areas is most likely affected?",
    options: [
      "Broca’s area",
      "Wernicke’s area",
      "Primary auditory cortex",
      "Primary visual cortex"
    ],
    answerIndex: 0,
    correctAnswerText: "Broca’s area"
  },
  {
    id: 88,
    image: "",
    question: "A 48-year-old man is being examined for elevated jugular venous pressure. On inspection of the internal jugular venous pulse, the examiner identifies a prominent positive wave occurring during venous filling of the right atrium when the tricuspid valve remains closed. Which of the following best represents this wave?",
    options: [
      "a wave",
      "c wave",
      "v wave",
      "y descent"
    ],
    answerIndex: 2,
    correctAnswerText: "v wave"
  },
  {
    id: 89,
    image: "",
    question: "A 2-year-old child is brought to the emergency department with acute watery diarrhea and mild dehydration. The physician advises oral rehydration solution because intestinal sodium and glucose co-transport remains preserved even during most diarrheal illnesses. Which of the following transporters located on the apical membrane of enterocytes is primarily responsible for this mechanism?",
    options: [
      "Sodium-glucose linked transporter 1 (SGLT1)",
      "Glucose transporter 2 (GLUT2)",
      "Sodium-glucose linked transporter 2 (SGLT2)",
      "Glucose transporter 4 (GLUT4)"
    ],
    answerIndex: 0,
    correctAnswerText: "Sodium-glucose linked transporter 1 (SGLT1)"
  },
  {
    id: 90,
    image: "",
    question: "A 45-year-old man undergoes above-elbow amputation of his left upper limb after a traumatic injury. Several months later, he complains of severe pain that he clearly localizes to the absent hand and fingers. Functional neuroimaging demonstrates cortical remapping in the primary somatosensory cortex. Which of the following findings is most likely to be seen?",
    options: [
      "The cortical area representing adjacent body parts expands into the region that previously represented the amputated hand",
      "The cortical representation of the amputated hand remains unchanged because peripheral nerves have been severed",
      "The ipsilateral primary somatosensory cortex becomes hyperactive and takes over perception of the missing limb",
      "The entire primary motor cortex undergoes uniform enlargement on the side opposite the amputation"
    ],
    answerIndex: 0,
    correctAnswerText: "The cortical area representing adjacent body parts expands into the region that previously represented the amputated hand"
  },
  {
    id: 91,
    image: "",
    question: "A 32-year-old woman is being evaluated for hyperthyroidism. Her endocrinologist explains that the first step in thyroid hormone synthesis is active uptake of iodide from the bloodstream into the thyroid follicular cell across its basolateral membrane. Which of the following transporters is responsible for this step?",
    options: [
      "Pendrin",
      "Sodium-iodide symporter",
      "Thyroid peroxidase",
      "Monocarboxylate transporter 8"
    ],
    answerIndex: 1,
    correctAnswerText: "Sodium-iodide symporter"
  },
  {
    id: 92,
    image: "",
    question: "A 26-year-old postgraduate student consumes multiple cups of coffee at night to stay awake while studying for an examination. He notices delayed sleep onset and reduced sleepiness despite physical fatigue. The stimulant effect of caffeine is primarily due to which of the following mechanisms?",
    options: [
      "Blockade of adenosine receptors in the central nervous system",
      "Direct stimulation of gamma-aminobutyric acid receptors in the hypothalamus",
      "Increased secretion of melatonin from the pineal gland",
      "Activation of histamine H1 receptors causing sedation"
    ],
    answerIndex: 0,
    correctAnswerText: "Blockade of adenosine receptors in the central nervous system"
  },
  {
    id: 93,
    image: "",
    question: "A 29-year-old woman presents with recurrent episodes of blurred vision, limb weakness, and tingling sensations that improve partially over time. Magnetic resonance imaging shows multiple demyelinating plaques in the periventricular white matter of the central nervous system. The primary cell type damaged in this disease is responsible for formation of which of the following?",
    options: [
      "Myelin in the central nervous system",
      "Myelin in the peripheral nervous system",
      "Cerebrospinal fluid lining of the ventricles",
      "Phagocytic immune defense within neural tissue"
    ],
    answerIndex: 0,
    correctAnswerText: "Myelin in the central nervous system"
  },
  {
    id: 94,
    image: "",
    question: "A 21-year-old man receives a beta-2 adrenergic agonist during an acute asthma exacerbation. Soon after administration, his blood glucose rises because the receptor activates a stimulatory G protein pathway in hepatocytes, increasing intracellular cyclic adenosine monophosphate and promoting glycogenolysis. Which of the following enzymes is directly activated by this receptor signaling pathway?",
    options: [
      "Adenylyl cyclase",
      "Guanylyl cyclase",
      "Phospholipase C",
      "Tyrosine kinase"
    ],
    answerIndex: 0,
    correctAnswerText: "Adenylyl cyclase"
  },
  {
    id: 95,
    image: "",
    question: "A toxin selectively blocks voltage-gated calcium channels at the presynaptic terminal of the neuromuscular junction. Which of the following events will occur first after a normal nerve action potential reaches the motor nerve terminal in an unaffected neuromuscular junction?",
    options: [
      "Opening of ligand-gated sodium channels on the motor end plate",
      "Release of acetylcholine into the synaptic cleft",
      "Entry of calcium into the presynaptic nerve terminal",
      "Generation of a muscle action potential"
    ],
    answerIndex: 2,
    correctAnswerText: "Entry of calcium into the presynaptic nerve terminal"
  },
  {
    id: 96,
    image: "",
    question: "A 27-year-old woman presents with galactorrhea, irregular menstrual cycles, and inability to conceive for 1 year. Serum prolactin is markedly elevated, and magnetic resonance imaging reveals a pituitary microadenoma. The infertility in this patient is most likely due to which of the following?",
    options: [
      "Increased pulsatile release of gonadotropin-releasing hormone from the hypothalamus",
      "Suppression of gonadotropin-releasing hormone secretion leading to anovulation",
      "Direct stimulation of luteinizing hormone surge by prolactin",
      "Increased follicle-stimulating hormone secretion causing luteal phase defect"
    ],
    answerIndex: 1,
    correctAnswerText: "Suppression of gonadotropin-releasing hormone secretion leading to anovulation"
  },
  {
    id: 97,
    image: "",
    question: "A 58-year-old man with atrial fibrillation is started on warfarin therapy. The drug interferes with the post-translational gamma-carboxylation of glutamate residues required for calcium binding by certain coagulation factors. Which of the following factors will be most directly affected by this mechanism?",
    options: [
      "Factor IX",
      "Factor V",
      "Factor VIII",
      "Factor XII"
    ],
    answerIndex: 0,
    correctAnswerText: "Factor IX"
  },
  {
    id: 98,
    image: "",
    question: "A 68-year-old man presents with palpitations, fatigue, and an irregularly irregular pulse. Electrocardiography confirms atrial fibrillation. Which of the following findings is most likely to be seen on examination of the jugular venous pulse?",
    options: [
      "Absent a waves",
      "Giant v waves",
      "Cannon a waves",
      "Slow y descent"
    ],
    answerIndex: 0,
    correctAnswerText: "Absent a waves"
  },
  {
    id: 99,
    image: "",
    question: "A 60-year-old woman weighing 50 kilograms is admitted with symptomatic hyponatremia. Her serum sodium concentration is 128 milliequivalents per liter. Assuming the target sodium is 140 milliequivalents per liter, what is her approximate sodium deficit?",
    options: [
      "240 milliequivalents",
      "300 milliequivalents",
      "420 milliequivalents",
      "600 milliequivalents"
    ],
    answerIndex: 1,
    correctAnswerText: "300 milliequivalents"
  },
  {
    id: 100,
    image: "",
    question: "A 52-year-old man with type 2 diabetes mellitus starts a supervised aerobic and resistance exercise program. After several weeks, his fasting glucose improves and skeletal muscle glucose uptake increases because exercise enhances translocation of an insulin-responsive glucose transporter to the cell membrane. Which of the following transporters is primarily responsible for this effect?",
    options: [
      "Glucose transporter 1 (GLUT1)",
      "Glucose transporter 2 (GLUT2)",
      "Glucose transporter 4 (GLUT4)",
      "Sodium-glucose linked transporter 1 (SGLT1)"
    ],
    answerIndex: 2,
    correctAnswerText: "Glucose transporter 4 (GLUT4)"
  },
  {
    id: 101,
    image: "",
    question: "A 34-year-old woman presents with fatigue, weight loss, postural dizziness, and recurrent vomiting. Laboratory evaluation shows hyponatremia, hyperkalemia, and low serum cortisol. On examination, there is diffuse darkening of the buccal mucosa and skin creases. Which of the following is most directly responsible for this pigmentation?",
    options: [
      "Adrenocorticotropic hormone (ACTH)",
      "Cortisol",
      "Aldosterone",
      "Antidiuretic hormone (ADH)"
    ],
    answerIndex: 0,
    correctAnswerText: "Adrenocorticotropic hormone (ACTH)"
  },
  {
    id: 102,
    image: "",
    question: "A 59-year-old man develops a left homonymous hemianopia after a cerebrovascular accident. On testing the pupillary light reflex, illumination of the blind half of the retina fails to produce an adequate constriction response, whereas light shone into the seeing half produces normal constriction. This finding is most suggestive of a lesion at which of the following sites?",
    options: [
      "Right optic tract",
      "Right optic radiation",
      "Left optic nerve",
      "Optic chiasma"
    ],
    answerIndex: 0,
    correctAnswerText: "Right optic tract"
  },
  {
    id: 103,
    image: "",
    question: "A 48-year-old man with poorly controlled type 2 diabetes mellitus is started on a hormone therapy that binds to a transmembrane receptor with intrinsic enzymatic activity. Binding of the hormone causes autophosphorylation of tyrosine residues on the receptor and activation of downstream insulin receptor substrate proteins. Which of the following hormones acts through this signaling mechanism?",
    options: [
      "Insulin-like growth factor 1 (IGF-1)",
      "Thyroid-stimulating hormone (TSH)",
      "Corticotropin-releasing hormone (CRH)",
      "Follicle-stimulating hormone (FSH)"
    ],
    answerIndex: 0,
    correctAnswerText: "Insulin-like growth factor 1 (IGF-1)"
  },
  {
    id: 104,
    image: "",
    question: "A 40-year-old man complains of a rough sensation over the dorsum of his tongue after recovering from a febrile illness. On examination, the anterior two-thirds of the tongue shows numerous slender, conical projections that are keratinized and mechanical in function, but they are not involved in taste perception. Which of the following papillae is being described?",
    options: [
      "Fungiform papillae",
      "Foliate papillae",
      "Filiform papillae",
      "Circumvallate papillae"
    ],
    answerIndex: 2,
    correctAnswerText: "Filiform papillae"
  },
  {
    id: 105,
    image: "",
    question: "A 28-year-old trekker rapidly ascends to a Himalayan campsite at 4200 meters. Within 24 hours, he develops severe headache, vomiting, ataxia, and altered sensorium. Fundus examination shows papilledema. Which of the following best explains the cerebral event responsible for this condition?",
    options: [
      "Hypoxia causes cerebral vasoconstriction, reducing capillary pressure and producing cytotoxic edema",
      "Hypoxia causes cerebral vasodilation, increasing capillary hydrostatic pressure and causing vasogenic edema",
      "Hypocapnia causes cerebral vasodilation, leading to intracellular neuronal swelling",
      "Respiratory alkalosis directly disrupts the blood-brain barrier and produces hemorrhagic infarction"
    ],
    answerIndex: 1,
    correctAnswerText: "Hypoxia causes cerebral vasodilation, increasing capillary hydrostatic pressure and causing vasogenic edema"
  },
  {
    id: 106,
    image: "",
    question: "A 65-year-old man develops sudden-onset dyspnea after a long-haul flight. Imaging later confirms a large pulmonary embolism. In the affected alveoli, ventilation is preserved but blood flow is absent. What will be the ventilation-perfusion ratio in these alveoli?",
    options: [
      "Zero",
      "Less than normal",
      "Equal to one",
      "Infinity"
    ],
    answerIndex: 3,
    correctAnswerText: "Infinity"
  },
  {
    id: 107,
    image: "",
    question: "A 19-year-old student complains that lemonade tastes markedly less intense after a viral upper respiratory illness, although he can still identify sweet foods normally. Dysfunction of which of the following receptors or channels is most likely responsible for this selective loss of sour taste perception?",
    options: [
      "T1R2–T1R3 receptor",
      "T2R receptor",
      "Epithelial sodium channel (ENaC)",
      "PKD2L1/otopetrin-associated sour-sensing pathway"
    ],
    answerIndex: 3,
    correctAnswerText: "PKD2L1/otopetrin-associated sour-sensing pathway"
  },
  {
    id: 108,
    image: "",
    question: "A fluid sample obtained during an experimental study shows the following electrolyte composition: sodium 145 milliequivalents per liter, potassium 4 milliequivalents per liter, chloride 118 milliequivalents per liter, and very low protein concentration. From which of the following compartments was this sample most likely taken?",
    options: [
      "Intracellular fluid",
      "Plasma",
      "Interstitial fluid",
      "Transcellular fluid"
    ],
    answerIndex: 2,
    correctAnswerText: "Interstitial fluid"
  },
  {
    id: 109,
    image: "",
    question: "A 72-year-old man is found confused and collapsed during a summer heat wave. On arrival to the emergency department, his core temperature is 41.2 degrees Celsius, pulse is 132 per minute, and blood pressure is low. His skin is hot and flushed. Which of the following findings is least likely to be present in this patient?",
    options: [
      "Altered mental status",
      "Tachycardia",
      "Profuse sweating",
      "Hypotension"
    ],
    answerIndex: 2,
    correctAnswerText: "Profuse sweating"
  },
  {
    id: 110,
    image: "",
    question: "A 35-year-old man with peptic ulcer disease has rapid delivery of acidic chyme into the duodenum. Soon afterward, gastric motility decreases and pyloric sphincter tone increases, thereby slowing the transfer of further gastric contents into the small intestine. Which of the following reflexes best explains this response?",
    options: [
      "Gastrocolic reflex",
      "Gastroileal reflex",
      "Enterogastric reflex",
      "Intestino-intestinal reflex"
    ],
    answerIndex: 2,
    correctAnswerText: "Enterogastric reflex"
  },
  {
    id: 111,
    image: "",
    question: "A preterm neonate develops tachypnea, grunting, nasal flaring, and intercostal retractions soon after birth. Chest radiograph shows diffuse reticulogranular opacities with air bronchograms. The underlying cellular defect most directly involves impaired production of pulmonary surfactant by which of the following cells?",
    options: [
      "Type I pneumocytes",
      "Type II pneumocytes",
      "Alveolar macrophages",
      "Ciliated columnar epithelial cells"
    ],
    answerIndex: 1,
    correctAnswerText: "Type II pneumocytes"
  },
  {
    id: 112,
    image: "",
    question: "A 12-year-old boy develops generalized edema and heavy proteinuria. Electron microscopy suggests disruption of the negative charge barrier of the glomerular filtration membrane, allowing increased passage of albumin into the filtrate. Which of the following components of the glomerular basement membrane is primarily responsible for this charge-selective property?",
    options: [
      "Type IV collagen",
      "Laminin",
      "Heparan sulfate",
      "Nidogen"
    ],
    answerIndex: 2,
    correctAnswerText: "Heparan sulfate"
  },
  {
    id: 113,
    image: "",
    question: "A 30-year-old man closes his eyes while an examiner places a vibrating tuning fork on his fingertip and then lightly presses the same finger with a blunt object. He accurately identifies vibration and deep pressure, but he cannot precisely localize a painful pinprick. Which of the following receptors is most likely responsible for the intact sensations?",
    options: [
      "Meissner corpuscles",
      "Pacinian corpuscles",
      "Free nerve endings",
      "Merkel discs"
    ],
    answerIndex: 1,
    correctAnswerText: "Pacinian corpuscles"
  },
  {
    id: 114,
    image: "",
    question: "A 34-year-old woman presents with progressive weight gain, purple abdominal striae, proximal muscle weakness, hypertension, and easy bruising. Laboratory evaluation reveals elevated serum cortisol that is not suppressed by a low-dose dexamethasone test. Plasma adrenocorticotropic hormone is also elevated. Which of the following endocrine patterns is most consistent with a pituitary corticotroph adenoma?",
    options: [
      "High adrenocorticotropic hormone with high cortisol",
      "Low adrenocorticotropic hormone with high cortisol",
      "High adrenocorticotropic hormone with low cortisol",
      "Low adrenocorticotropic hormone with low cortisol"
    ],
    answerIndex: 0,
    correctAnswerText: "High adrenocorticotropic hormone with high cortisol"
  },
  {
    id: 115,
    image: "",
    question: "A 42-year-old man falls asleep in an awkward position with his leg compressed against a hard surface for several hours. On waking, he notices numbness and weakness in the affected limb. The earliest nerve fibers most likely to be impaired by this pressure-induced conduction block are which of the following?",
    options: [
      "Large myelinated A fibers",
      "Small myelinated B fibers",
      "Unmyelinated C fibers",
      "Postganglionic sympathetic fibers"
    ],
    answerIndex: 0,
    correctAnswerText: "Large myelinated A fibers"
  },
  {
    id: 116,
    image: "",
    question: "A blood bank resident is comparing acid citrate dextrose (ACD) and citrate phosphate dextrose adenine (CPDA-1) as preservative solutions for packed red cell storage. Which of the following is not an advantage of CPDA-1 over ACD?",
    options: [
      "Better preservation of 2,3-diphosphoglycerate",
      "Improved adenosine triphosphate maintenance and red cell survival",
      "Increased extracellular potassium accumulation during storage",
      "Longer allowable storage period"
    ],
    answerIndex: 2,
    correctAnswerText: "Increased extracellular potassium accumulation during storage"
  },
  {
    id: 117,
    image: "",
    question: "A 26-year-old woman accidentally spills hot tea on the dorsum of her hand. The contact is brief, but for several minutes afterward even a light touch over the affected skin produces marked pain. Which of the following terms best describes this phenomenon?",
    options: [
      "Hyperesthesia",
      "Hyperalgesia",
      "Paresthesia",
      "Hypoesthesia"
    ],
    answerIndex: 1,
    correctAnswerText: "Hyperalgesia"
  },
  {
    id: 118,
    image: "",
    question: "A patient with repeated vomiting develops metabolic alkalosis with a serum potassium level of 2.8 milliequivalents per liter. Which of the following immediate changes is most likely to occur in the resting membrane potential of skeletal muscle cells?",
    options: [
      "Depolarization due to reduced potassium gradient",
      "Hyperpolarization due to increased potassium efflux",
      "No change because sodium determines resting membrane potential",
      "Initial depolarization followed by complete inexcitability without membrane potential change"
    ],
    answerIndex: 1,
    correctAnswerText: "Hyperpolarization due to increased potassium efflux"
  },
  {
    id: 119,
    image: "",
    question: "A 14-year-old boy presents with abrupt, irregular, purposeless jerky movements involving his face and distal upper limbs. The movements worsen with voluntary activity and disappear during sleep. There is no muscle weakness or sensory loss. Dysfunction of which of the following structures is most likely responsible for this hyperkinetic movement disorder?",
    options: [
      "Subthalamic nucleus",
      "Substantia nigra pars compacta",
      "Cerebellar vermis",
      "Primary motor cortex"
    ],
    answerIndex: 0,
    correctAnswerText: "Subthalamic nucleus"
  },
  {
    id: 120,
    image: "",
    question: "A 41-year-old man undergoes surgical resection of the terminal ileum for Crohn disease. Several months later, he develops fatigue, numbness in his feet, and macrocytic anemia. Which of the following nutrients is most specifically malabsorbed because of loss of this intestinal segment?",
    options: [
      "Folate",
      "Vitamin B12",
      "Iron",
      "Calcium"
    ],
    answerIndex: 1,
    correctAnswerText: "Vitamin B12"
  },
  {
    id: 121,
    image: "",
    question: "A 38-year-old man sustains a penetrating injury involving the posterior part of the cervical spinal cord on the right side. Neurological examination shows loss of vibration sense and impaired joint position sense in the right upper limb below the level of the lesion, while pain and temperature sensation are preserved. Which of the following tracts is most likely affected?",
    options: [
      "Right fasciculus cuneatus",
      "Left lateral spinothalamic tract",
      "Right corticospinal tract",
      "Left fasciculus gracilis"
    ],
    answerIndex: 0,
    correctAnswerText: "Right fasciculus cuneatus"
  },
  {
    id: 122,
    image: "",
    question: "A researcher is analyzing Starling forces across a systemic capillary. At one point, the capillary hydrostatic pressure is 32 millimeters of mercury, capillary oncotic pressure is 25 millimeters of mercury, and interstitial oncotic pressure is 5 millimeters of mercury. If there is no net fluid movement across the capillary wall, what is the interstitial hydrostatic pressure?",
    options: [
      "2 millimeters of mercury",
      "6 millimeters of mercury",
      "12 millimeters of mercury",
      "18 millimeters of mercury"
    ],
    answerIndex: 2,
    correctAnswerText: "12 millimeters of mercury"
  },
  {
    id: 123,
    image: "",
    question: "A healthy man stands up suddenly from a supine position and experiences a brief fall in arterial pressure. Within seconds, stretch receptors in the carotid sinus trigger autonomic adjustments that restore blood pressure toward normal. This response is an example of which of the following control mechanisms?",
    options: [
      "Positive feedback",
      "Feedforward control",
      "Negative feedback",
      "Open-loop regulation"
    ],
    answerIndex: 2,
    correctAnswerText: "Negative feedback"
  },
{
  id: 124,
  image: "",
  question:
    "A 16-year-old boy is evaluated for delayed virilization. Which of the following hormones is secreted by Leydig cells of the testes in response to luteinizing hormone (LH)?",
  options: [
    "Dihydrotestosterone",
    "Testosterone",
    "Estradiol",
    "Inhibin B",
  ],
  answerIndex: 1,
  correctAnswerText: "Testosterone",
},
{
  id: 125,
  image: "",
  question:
    "A patient undergoes pulmonary function testing. Which of the following cannot be measured directly by simple spirometry?",
  options: [
    "Tidal volume",
    "Inspiratory reserve volume",
    "Vital capacity",
    "Residual volume",
  ],
  answerIndex: 3,
  correctAnswerText: "Residual volume",
},
{
  id: 126,
  image: "",
  question:
    "A child presents with profuse watery diarrhea after consuming contaminated water. The toxin responsible acts by binding to which of the following receptors on intestinal epithelial cells?",
  options: [
    "Nicotinic acetylcholine receptor",
    "GM1 ganglioside receptor",
    "Epidermal growth factor receptor",
    "GABA-A receptor",
  ],
  answerIndex: 1,
  correctAnswerText: "GM1 ganglioside receptor",
},
{
  id: 127,
  image: "",
  question:
    "A patient receiving chemotherapy develops repeated vomiting. Which of the following structures acts as the chemoreceptor trigger zone for vomiting?",
  options: [
    "Nucleus accumbens",
    "Area postrema",
    "Caudate nucleus",
    "Substantia nigra",
  ],
  answerIndex: 1,
  correctAnswerText: "Area postrema",
},
{
  id: 128,
  image: "",
  question:
    "A 25-year-old man is asked during a physiology viva which receptor combination mediates the sensation of sweet taste. Which of the following is the correct answer?",
  options: [
    "T1R2 and T1R3",
    "Epithelial sodium channel",
    "T2R only",
    "Metabotropic glutamate receptor 4",
  ],
  answerIndex: 0,
  correctAnswerText: "T1R2 and T1R3",
},
{
  id: 129,
  image: "",
  question:
    "A man starts a 100-meter sprint from rest. After the very small amount of immediately available adenosine triphosphate is exhausted, which of the following is the next most important immediate source of energy for muscle contraction?",
  options: [
    "Beta oxidation of fatty acids",
    "Oxidative phosphorylation",
    "Phosphocreatine",
    "Aerobic glycolysis",
  ],
  answerIndex: 2,
  correctAnswerText: "Phosphocreatine",
},
{
  id: 130,
  image: "",
  question:
    "A 52-year-old woman with carcinoma breast is started on an anticancer drug that binds to beta-tubulin and stabilizes microtubules, thereby preventing their depolymerization. This causes mitotic arrest in the M phase of the cell cycle. Which of the following drugs is the best answer?",
  options: [
    "Vinblastine",
    "Vincristine",
    "Paclitaxel",
    "Colchicine",
  ],
  answerIndex: 2,
  correctAnswerText: "Paclitaxel",
},
{
  id: 131,
  image: "",
  question:
    "A 22-year-old medical student is revising the composition and functions of the plasma membrane. He recalls that the membrane contains proteins, phospholipids, cholesterol, other lipids, and carbohydrates. Which of the following statements about the cell membrane is most accurate?",
  options: [
    "Phospholipids are the least abundant component and mainly act as receptors",
    "Cholesterol decreases membrane fluidity and has no role in membrane permeability",
    "Sphingolipids are derived from sphingosine, are abundant in neurons, and help in signal transmission",
    "Carbohydrates are present only in free form and are not associated with lipids or proteins",
  ],
  answerIndex: 2,
  correctAnswerText:
    "Sphingolipids are derived from sphingosine, are abundant in neurons, and help in signal transmission",
},
  {
    id: 132,
    image: "images/IMG_1773.jpeg",
    question:
      "A histology student is shown an image in which one cell releases signaling molecules that diffuse across a short distance through the extracellular space and act on a nearby target cell. There is no transport through blood, no direct cell-to-cell junction, and the signaling cell is not acting on itself. Which type of cell signaling is best represented?",
    options: [
      "Endocrine signaling",
      "Paracrine signaling",
      "Autocrine signaling",
      "Merocrine secretion"
    ],
    answerIndex: 1,
    correctAnswerText: "Paracrine signaling"
  },
  {
    id: 133,
    image: "images/IMG_1873.jpeg",
    question:
      "A 32-year-old man undergoes urodynamic evaluation. The image shows a cystometrogram plotting intravesical pressure against intravesical volume. The tracing has an initial small rise in pressure, followed by a long plateau as bladder volume increases, and then a sudden steep rise in pressure near a volume of about 400 milliliters, indicating the onset of the micturition reflex. Which of the following best explains the near-constant pressure during the long plateau segment of the graph?",
    options: [
      "Continuous relaxation of the internal urethral sphincter causing urine leakage",
      "High bladder compliance due to stress-relaxation and receptive relaxation of the detrusor muscle",
      "Absence of parasympathetic innervation to the urinary bladder during filling",
      "Persistent contraction of the detrusor muscle preventing pressure rise"
    ],
    answerIndex: 1,
    correctAnswerText:
      "High bladder compliance due to stress-relaxation and receptive relaxation of the detrusor muscle"
  },
  {
    id: 134,
    image: "images/IMG_1866.jpeg",
    question:
      "A physiology student is shown a graph of percent filtered load remaining along different segments of the nephron from Bowman’s space to urine. In the graph, line C remains constant at 100%, line D rises above 100%, line A falls rapidly to nearly zero within the proximal tubule, and line B decreases substantially but not to zero. Which of the following is the most accurate interpretation?",
    options: [
      "Line C represents a substance that is filtered and neither reabsorbed nor secreted, such as inulin",
      "Line D represents a substance that is completely reabsorbed in the proximal tubule, such as glucose",
      "Line A represents a substance that is secreted into the tubule, such as para-aminohippuric acid",
      "Line B represents a substance that is neither filtered nor secreted"
    ],
    answerIndex: 0,
    correctAnswerText:
      "Line C represents a substance that is filtered and neither reabsorbed nor secreted, such as inulin"
  },
  {
    id: 135,
    image: "images/IMG_1872.jpeg",
    question:
      "A cell physiology diagram shows solute particles moving across the plasma membrane through specific carrier proteins from an area of higher concentration in the extracellular space to an area of lower concentration in the intracellular space. No hydrolysis of adenosine triphosphate is shown, and movement occurs down the concentration gradient. Which of the following substances is most classically transported by the mechanism depicted in the image?",
    options: [
      "Sodium ion by sodium-potassium adenosine triphosphatase",
      "Glucose into skeletal muscle via glucose transporter type 4",
      "Calcium ion out of the cell by calcium adenosine triphosphatase",
      "Hydrogen ion secretion in renal tubules by primary proton pump"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Glucose into skeletal muscle via glucose transporter type 4"
  },
  {
    id: 136,
    image: "images/IMG_1870.jpeg",
    question:
      "A 26-year-old man develops fever due to infection. The image shows that the hypothalamic temperature set-point suddenly rises, after which actual body temperature is initially below the new set-point and then gradually increases. Later, when the set-point returns to normal, body temperature is temporarily higher than the set-point and then falls. During the phase immediately after the set-point is raised, which of the following responses is most likely to occur?",
    options: [
      "Sweating and cutaneous vasodilation",
      "Shivering and cutaneous vasoconstriction",
      "Increased heat loss through radiation and convection",
      "Suppression of sympathetic activity to skin blood vessels"
    ],
    answerIndex: 1,
    correctAnswerText: "Shivering and cutaneous vasoconstriction"
  },
  {
    id: 137,
    image: "images/IMG_1869.jpeg",
    question:
      "A 58-year-old man suddenly develops pleuritic chest pain and breathlessness. Imaging later confirms an acute embolic obstruction of blood flow to a part of the lung. In the given ventilation-perfusion graph, which labeled point best represents pulmonary embolism?",
    options: ["A", "B", "C", "E"],
    answerIndex: 3,
    correctAnswerText: "E"
  },
  {
    id: 138,
    image: "images/IMG_1868.jpeg",
    question:
      "A spirometry tracing shows normal tidal oscillations around the end-expiratory level. In the image, Which of the following best identifies the marked region?",
    options: [
      "Residual volume",
      "Functional residual capacity",
      "Inspiratory capacity",
      "Vital capacity"
    ],
    answerIndex: 1,
    correctAnswerText: "Functional residual capacity"
  },
  {
    id: 139,
    image: "images/IMG_1902.jpeg",
    question:
      "A 24-year-old man is studying the ventricular myocardial action potential. In the given graph, the red horizontal segment represents the plateau phase. Which of the following best explains the physiological importance of this phase?",
    options: [
      "It allows rapid repetitive firing by shortening the refractory period",
      "It prolongs the refractory period, preventing tetanization of cardiac muscle",
      "It is caused mainly by opening of fast sodium channels throughout the phase",
      "It occurs due to activation of sodium-potassium adenosine triphosphatase alone"
    ],
    answerIndex: 1,
    correctAnswerText:
      "It prolongs the refractory period, preventing tetanization of cardiac muscle"
  },
  {
    id: 140,
    image: "images/IMG_1787.jpeg",
    question:
      "A healthy 16-year-old boy is asked to take slow deep breaths during pulse recording. The tracing shows cyclical increase in heart rate during inspiration and decrease in heart rate during expiration, with preservation of sinus origin of each beat. Which of the following best explains this physiological phenomenon?",
    options: [
      "Premature atrial depolarizations arising from an ectopic atrial focus",
      "Respiratory modulation of vagal tone causing phasic variation in sinoatrial node firing",
      "Persistent sympathetic overactivity producing sustained sinus tachycardia",
      "Depressed sinoatrial node automaticity causing sinus bradycardia"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Respiratory modulation of vagal tone causing phasic variation in sinoatrial node firing"
  },
  {
    id: 141,
    image: "images/IMG_1791.jpeg",
    question:
      "A 40-year-old man undergoes a routine electrocardiographic examination. On the rhythm strip, the interval between two consecutive normal R waves is approximately 4 large squares. What is the most likely heart rate?",
    options: [
      "50 beats per minute",
      "75 beats per minute",
      "100 beats per minute",
      "150 beats per minute"
    ],
    answerIndex: 1,
    correctAnswerText: "75 beats per minute"
  },
  {
    id: 142,
    image: "images/IMG_1867.jpeg",
    question:
      "A physiology student is shown an image of fluid flowing through a tube that narrows in the middle. The vertical side tubes indicate that the fluid column height is lowest at the narrowest segment, showing a fall in lateral pressure where flow velocity is greatest. Which of the following clinical situations is best explained by the same principle demonstrated in the image?",
    options: [
      "Airway collapse caused by increased intraluminal pressure in a narrowed airway",
      "Suction effect that contributes to collapse of a partially narrowed airway during rapid airflow",
      "Increase in blood pressure across a stenosis because flow velocity decreases",
      "Reduced flow velocity through a narrow segment due to conservation of pressure alone"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Suction effect that contributes to collapse of a partially narrowed airway during rapid airflow"
  },
  {
    id: 143,
    image: "images/IMG_1865.jpeg",
    question:
      "A 24-year-old man with type 1 diabetes mellitus is brought to the emergency department with vomiting, abdominal pain, dehydration, and altered sensorium. On examination, he has deep, labored, rapid breathing as shown in the image. Arterial blood gas analysis reveals metabolic acidosis. Which of the following is the most likely explanation for this breathing pattern?",
    options: [
      "It is a form of periodic breathing seen in congestive heart failure due to delayed respiratory center response",
      "It is compensatory hyperventilation classically seen in metabolic acidosis, especially diabetic ketoacidosis",
      "It is an ataxic breathing pattern caused by medullary respiratory center damage",
      "It is apneustic breathing due to pontine lesion causing prolonged inspiratory spasm"
    ],
    answerIndex: 1,
    correctAnswerText:
      "It is compensatory hyperventilation classically seen in metabolic acidosis, especially diabetic ketoacidosis"
  },
  {
    id: 144,
    image: "images/IMG_1864.jpeg",
    question:
      "A 58-year-old man is brought to the emergency department after severe head trauma. He is drowsy, has irregular episodes of breathing, and develops intermittent pauses in respiration. The breathing pattern is as shown in the image. Which of the following is the most likely diagnosis?",
    options: [
      "Kussmaul breathing due to metabolic acidosis",
      "Cheyne–Stokes respiration due to congestive heart failure",
      "Biot’s respiration due to medullary dysfunction",
      "Apneustic breathing due to pontine lesion causing prolonged inspiratory spasm"
    ],
    answerIndex: 2,
    correctAnswerText: "Biot’s respiration due to medullary dysfunction"
  },
  {
    id: 145,
    image: "images/IMG_1901.jpeg",
    question:
      "A 14-year-old boy with type 1 diabetes mellitus is brought to the outpatient department because of repeated early morning hyperglycemia despite adherence to insulin therapy. His overnight blood glucose measured at 3 am is normal. A teaching chart shown to him demonstrates a hormone secreted in pulsatile bursts, with a major rise during sleep and after strenuous exercise. Which of the following is the most likely explanation for his early morning hyperglycemia?",
    options: [
      "Excess bedtime insulin causing nocturnal hypoglycemia followed by rebound hyperglycemia",
      "Early morning surge of growth hormone and cortisol causing dawn phenomenon",
      "Continuous daytime hypersecretion of cortisol causing Cushing syndrome",
      "Postprandial insulin excess causing reactive hypoglycemia before sunrise"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Early morning surge of growth hormone and cortisol causing dawn phenomenon"
  },
  {
    id: 146,
    image: "images/IMG_1819.jpeg",
    question:
      "A 26-year-old healthy man rapidly receives an intravenous fluid bolus during a physiology demonstration. His venous return increases, and the instructor shows the pressure-volume loop in the image. Which of the following best explains the change shown in the loop?",
    options: [
      "Decreased preload causing reduced end-diastolic volume and reduced stroke volume",
      "Increased preload causing increased end-diastolic volume and increased stroke volume by Frank-Starling mechanism",
      "Increased afterload causing increased end-systolic volume with reduced stroke volume",
      "Increased contractility causing reduced end-systolic volume without change in end-diastolic volume"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Increased preload causing increased end-diastolic volume and increased stroke volume by Frank-Starling mechanism"
  },
  {
    id: 147,
    image: "images/IMG_1863.jpeg",
    question:
      "A 20-year-old man is evaluated after sustaining a lateral medullary region injury. On neurological examination, he has impaired unconscious proprioceptive coordination of the lower limb. During an anatomy viva, he is shown the highlighted cerebellar peduncle in the image and is asked which ascending pathway enters the cerebellum through this structure. Which of the following is the correct answer?",
    options: [
      "Dorsal spinocerebellar tract",
      "Cuneocerebellar tract",
      "Anterior spinocerebellar tract",
      "Pontocerebellar fibers"
    ],
    answerIndex: 2,
    correctAnswerText: "Anterior spinocerebellar tract"
  },
  {
    id: 148,
    image: "images/IMG_1828.jpeg",
    question:
      "A 22-year-old man is brought to the emergency department after strenuous exercise with severe muscle pain. During discussion of oxygen storage and delivery to muscle, he is shown the oxygen dissociation curves in the image. Which of the following best represents curve A?",
    options: [
      "Myoglobin",
      "Carboxyhemoglobinemia",
      "Methemoglobin",
      "Fetal hemoglobin"
    ],
    answerIndex: 0,
    correctAnswerText: "Myoglobin"
  },
  {
    id: 149,
    image: "images/IMG_1829.jpeg",
    question:
      "A 24-year-old man is brought to the emergency department after a road traffic accident and requires urgent blood grouping before transfusion.His slide agglutination is given. Which of the following is the most likely blood group?",
    options: ["A positive", "B positive", "O positive", "AB positive"],
    answerIndex: 2,
    correctAnswerText: "O positive"
  },
  {
    id: 150,
    image: "images/IMG_1833.jpeg",
    question:
      "A 27-year-old man steps on a sharp object with his right foot and immediately withdraws the limb. In the physiology laboratory, a myogram similar to the image is shown, demonstrating a prolonged contraction that continues briefly even after the stimulus is removed, followed later by decline due to fatigue. Which of the following best explains the persistence of contraction after cessation of the stimulus in this reflex?",
    options: [
      "Monosynaptic activation of alpha motor neuron causing immediate sustained contraction",
      "Reverberating interneuronal circuits producing after-discharge in a polysynaptic reflex",
      "Muscle spindle activation causing a stretch reflex through group Ia afferent fibers",
      "Golgi tendon organ inhibition producing inverse myotatic reflex"
    ],
    answerIndex: 1,
    correctAnswerText:
      "Reverberating interneuronal circuits producing after-discharge in a polysynaptic reflex"
  },
  {
    id: 151,
    image: "images/IMG_1834.jpeg",
    question:
      "A 7-year-old girl is brought with early breast development, intermittent vaginal bleeding, and rapid increase in height. Examination shows an irregularly bordered hyperpigmented skin lesion over the body, as seen in the image. Genetic analysis reveals a gain-of-function mutation involving the stimulatory G protein alpha subunit. Which of the following is the most likely diagnosis?",
    options: [
      "Neurofibromatosis type 1",
      "Congenital adrenal hyperplasia",
      "McCune-Albright syndrome",
      "Turner syndrome"
    ],
    answerIndex: 2,
    correctAnswerText: "McCune-Albright syndrome"
  },
  {
    id: 152,
    image: "images/IMG_1841.jpeg",
    question:
      "A 61-year-old man with small cell lung carcinoma is brought with headache, nausea, confusion, and a recent episode of generalized seizure. He is euvolemic on examination. Laboratory testing shows low serum sodium, low plasma osmolarity, inappropriately concentrated urine, and high urine sodium. The fluid compartment change corresponding to the image is most likely which of the following?",
    options: [
      "Iso-osmotic volume contraction with reduction only in extracellular fluid, as seen in diarrhea",
      "Hyperosmotic volume contraction with reduction in both intracellular and extracellular fluid, as seen in water deprivation",
      "Hypo-osmotic volume expansion with increase in both intracellular and extracellular fluid, as seen in syndrome of inappropriate antidiuretic hormone secretion",
      "Hyperosmotic volume expansion with extracellular fluid expansion and intracellular fluid contraction, as seen after excessive sodium chloride intake"
    ],
    answerIndex: 2,
    correctAnswerText:
      "Hypo-osmotic volume expansion with increase in both intracellular and extracellular fluid, as seen in syndrome of inappropriate antidiuretic hormone secretion"
  },
  {
    id: 153,
    image: "images/IMG_1843.jpeg",
    question:
      "A 55-year-old chronic smoker with progressive exertional dyspnea is sent to the pulmonary function laboratory. A technician performs the following test shown in the image. The pulmonologist asks which of the following parameters cannot be measured directly by this instrument. Which is the correct answer?",
    options: [
      "Tidal volume",
      "Residual volume",
      "Vital capacity",
      "Inspiratory reserve volume"
    ],
    answerIndex: 1,
    correctAnswerText: "Residual volume"
  },
  {
    id: 154,
    image: "images/IMG_1846.jpeg",
    question:
      "A 15-year-old obese adolescent presents with hyperphagia and progressive weight gain. He is being evaluated for hormonal regulation of appetite and energy balance. During a physiology seminar, he is shown the signaling pathway in the image. Which of the following hormones acts predominantly via this pathway?",
    options: [
      "Calcitonin",
      "Vasopressin",
      "Aldosterone",
      "Leptin"
    ],
    answerIndex: 3,
    correctAnswerText: "Leptin"
  },
  {
    id: 155,
    image: "images/IMG_1853.jpeg",
    question:
      "A 34-year-old woman is evaluated for hypertension, central obesity, and mild hirsutism. During endocrine histology teaching, she is shown the adrenal gland section in the image with zones labeled A, B, C, and D from outer to inner region. Which of the following correctly matches the labeled zones with their principal hormone products?",
    options: [
      "A–cortisol, B–aldosterone, C–androgens, D–epinephrine",
      "A–epinephrine, B–cortisol, C–aldosterone, D–androgens",
      "A–aldosterone, B–epinephrine, C–androgens, D–cortisol",
      "A–aldosterone, B–cortisol, C–androgens, D–epinephrine"
    ],
    answerIndex: 3,
    correctAnswerText:
      "A–aldosterone, B–cortisol, C–androgens, D–epinephrine"
  },
  {
    id: 156,
    image: "images/IMG_1905.jpeg",
    question:
      "A 32-year-old man undergoes neurological sensory testing after a hand injury. A receptor shown in the image is identified as a lamellated corpuscle that responds best to vibration and rapidly changing pressure. Which of the following best describes this receptor?",
    options: [
      "Slow adapting and not encapsulated",
      "Fast adapting and encapsulated",
      "Fast adapting and not encapsulated",
      "Slow adapting and encapsulated"
    ],
    answerIndex: 1,
    correctAnswerText: "Fast adapting and encapsulated"
  },
  {
    id: 157,
    image: "",
    question: "A 24-year-old man is asked about activation of pancreatic proteolytic enzymes in the small intestine. Which of the following zymogens is activated by trypsin?",
    options: [
      "Chymotrypsinogen",
      "Pepsinogen",
      "Prolipase",
      "Progastrin"
    ],
    answerIndex: 0,
    correctAnswerText: "Chymotrypsinogen"
  },
  {
    id: 158,
    image: "",
    question: "A 65-year-old postmenopausal woman with osteoporosis is treated with a monoclonal antibody that decreases osteoclast formation by acting like the natural decoy receptor produced by osteoblasts. Which of the following molecules normally functions as this decoy receptor?",
    options: [
      "Receptor activator of nuclear factor kappa-B ligand",
      "Osteoprotegerin",
      "Macrophage colony-stimulating factor",
      "Parathyroid hormone"
    ],
    answerIndex: 1,
    correctAnswerText: "Osteoprotegerin"
  },
  {
    id: 159,
    image: "",
    question: "A bright flash of light falls on a rod photoreceptor in the retina. Which of the following occurs immediately after activation of transducin?",
    options: [
      "Increase in cyclic guanosine monophosphate causing sodium channels to open",
      "Activation of phosphodiesterase causing cyclic guanosine monophosphate to fall",
      "Increased sodium influx producing depolarization",
      "Increased neurotransmitter release from the photoreceptor"
    ],
    answerIndex: 1,
    correctAnswerText: "Activation of phosphodiesterase causing cyclic guanosine monophosphate to fall"
  },
  {
    id: 160,
    image: "",
    question: "A patient undergoes testing of cochlear function. Deflection of stereocilia of an inner hair cell toward the tallest stereocilium causes opening of mechanically gated cation channels. Which of the following is the immediate ionic event that produces depolarization of the hair cell?",
    options: [
      "Sodium influx from perilymph into the apical end of the hair cell",
      "Potassium influx from endolymph into the apical end of the hair cell",
      "Chloride influx from endolymph into the basal end of the hair cell",
      "Calcium efflux into endolymph through voltage-gated channels"
    ],
    answerIndex: 1,
    correctAnswerText: "Potassium influx from endolymph into the apical end of the hair cell"
  },
  {
    id: 161,
    image: "",
    question: "A 22-year-old medical student is asked about inhibitory interneurons in the olfactory bulb. Which of the following cells are axonless inhibitory neurons that form dendrodendritic synapses and help produce lateral inhibition?",
    options: [
      "Mitral cells",
      "Tufted cells",
      "Granule cells",
      "Olfactory receptor neurons"
    ],
    answerIndex: 2,
    correctAnswerText: "Granule cells"
  },
  {
    id: 162,
    image: "",
    question: "A child with normal hearing is asked about the neurotransmitter released from inner hair cells when they depolarize in response to sound. Which of the following is most likely released onto the afferent fibers of the cochlear nerve?",
    options: [
      "Glycine",
      "Glutamate",
      "Gamma-aminobutyric acid",
      "Acetylcholine"
    ],
    answerIndex: 1,
    correctAnswerText: "Glutamate"
  },
  {
    id: 163,
    image: "",
    question: "A retinal histology slide is being discussed in class. The teacher asks which structure is present in the outer segment rather than the inner segment of a photoreceptor. Which of the following is the correct answer?",
    options: [
      "Golgi apparatus",
      "Endoplasmic reticulum",
      "Mitochondria",
      "Membranous discs"
    ],
    answerIndex: 3,
    correctAnswerText: "Membranous discs"
  },
  {
    id: 164,
    image: "",
    question: "A 26-year-old man is evaluated for persistent hypertension. Investigations show low plasma renin activity and excess autonomous aldosterone secretion from the adrenal cortex. Which of the following findings is most likely present in this patient?",
    options: [
      "Hyperkalemia with metabolic acidosis",
      "Hypotension with high renin levels",
      "Hypokalemia with metabolic alkalosis",
      "Hyponatremia with dehydration"
    ],
    answerIndex: 2,
    correctAnswerText: "Hypokalemia with metabolic alkalosis"
  },
  {
    id: 165,
    image: "",
    question: "An 18-year-old boy presents with excessive thirst and passage of large volumes of dilute urine. Laboratory evaluation shows hypernatremia and a very low urine osmolality. His free water clearance is increased. Which of the following is the most likely diagnosis?",
    options: [
      "Diabetes insipidus",
      "Diabetes mellitus",
      "Congestive heart failure",
      "Renal failure"
    ],
    answerIndex: 0,
    correctAnswerText: "Diabetes insipidus"
  },
  {
    id: 166,
    image: "",
    question: "A fatty meal enters the duodenum and stimulates release of cholecystokinin. Which of the following is NOT an action of cholecystokinin?",
    options: [
      "Contraction of gallbladder",
      "Increased enzyme-rich pancreatic secretion",
      "Increased gastric acid secretion",
      "Relaxation of the sphincter of Oddi"
    ],
    answerIndex: 2,
    correctAnswerText: "Increased gastric acid secretion"
  },
  {
    id: 167,
    image: "",
    question: "A patient is asked about short-chain fatty acids formed in the large intestine. Which of the following statements about short-chain fatty acids is NOT correct?",
    options: [
      "They are produced in the colon by bacterial fermentation of resistant starch and dietary fiber",
      "Acetate is the most abundant short-chain fatty acid",
      "They are absorbed in the colon",
      "They are absorbed mainly by a sodium–short-chain fatty acid cotransporter"
    ],
    answerIndex: 3,
    correctAnswerText: "They are absorbed mainly by a sodium–short-chain fatty acid cotransporter"
  },
  {
    id: 168,
    image: "",
    question: "A healthy person eats a large meal, yet the intragastric pressure rises only minimally despite marked filling of the stomach. Which of the following best explains this phenomenon?",
    options: [
      "Peristalsis",
      "Gastroileal reflex",
      "Segmentation",
      "Receptive relaxation"
    ],
    answerIndex: 3,
    correctAnswerText: "Receptive relaxation"
  },
  {
    id: 169,
    image: "",
    question: "A 3-year-old child aspirates a small round object that completely blocks the left main bronchus. Which of the following is the most likely consequence in the affected lung?",
    options: [
      "Ventilation-perfusion ratio becomes zero",
      "Ventilation-perfusion ratio becomes infinite",
      "Alveolar gas becomes similar to inspired air",
      "Alveolar partial pressure of oxygen increases"
    ],
    answerIndex: 0,
    correctAnswerText: "Ventilation-perfusion ratio becomes zero"
  },
  {
    id: 170,
    image: "",
    question: "A lesion study is being discussed in physiology class. Which of the following is most likely to completely abolish spontaneous respiration?",
    options: [
      "Transection of the brainstem above the pons",
      "Transection of the brainstem at the caudal end of the medulla",
      "Bilateral vagotomy",
      "Bilateral vagotomy with transection at the superior border of the pons"
    ],
    answerIndex: 1,
    correctAnswerText: "Transection of the brainstem at the caudal end of the medulla"
  },
  {
    id: 171,
    image: "",
    question: "A 30-year-old man with a small lesion involving the corticospinal tract still retains some gross voluntary movements because another descending motor pathway partly substitutes for cortical output. Which of the following structures serves as this alternate pathway for signals from the motor cortex?",
    options: [
      "Thalamus",
      "Red nucleus",
      "Basilar pontine nuclei",
      "Caudate nucleus"
    ],
    answerIndex: 1,
    correctAnswerText: "Red nucleus"
  },
  {
    id: 172,
    image: "",
    question: "A comatose patient shows decorticate posturing after a cerebral insult. Which of the following statements is NOT a physiological basis of decorticate posturing?",
    options: [
      "Dominance of excitatory reticulospinal influences producing extensor rigidity in the lower limbs",
      "Rubrospinal facilitation of flexor muscles in the upper limbs",
      "Spasticity occurs due to facilitation of the gamma loop",
      "Spasticity occurs due to inhibition of the gamma loop"
    ],
    answerIndex: 3,
    correctAnswerText: "Spasticity occurs due to inhibition of the gamma loop"
  },
  {
    id: 173,
    image: "",
    question: "Which part of the nephron is the major site for antidiuretic hormone (ADH)-dependent urea permeability, helping in medullary hyperosmolarity?",
    options: [
      "Thick ascending limb of loop of Henle",
      "Distal convoluted tubule",
      "Cortical collecting duct",
      "Inner medullary collecting duct"
    ],
    answerIndex: 3,
    correctAnswerText: "Inner medullary collecting duct"
  },
  {
    id: 174,
    image: "",
    question: "A healthy young man performs prolonged dynamic exercise for one hour. Blood flow is redistributed to support active tissues and thermoregulation. Which of the following structures shows the maximum increase in blood flow during exercise?",
    options: [
      "Kidney",
      "Intestine",
      "Exercising skeletal muscles",
      "Non-exercising muscles"
    ],
    answerIndex: 2,
    correctAnswerText: "Exercising skeletal muscles"
  },
  {
    id: 175,
    image: "",
    question: "During the cardiac cycle, which of the following occurs immediately after the first heart sound?",
    options: [
      "a wave of jugular venous pulse",
      "c wave of jugular venous pulse",
      "v wave of jugular venous pulse",
      "Second heart sound"
    ],
    answerIndex: 1,
    correctAnswerText: "c wave of jugular venous pulse"
  },
  {
    id: 176,
    image: "",
    question: "A child with a space-occupying intracranial lesion develops marked rise in intracranial pressure (ICP). Which of the following is the most likely associated finding?",
    options: [
      "Hypotension with tachycardia",
      "Hypertension with bradycardia",
      "Hypotension with bradycardia",
      "Hypertension with tachycardia"
    ],
    answerIndex: 1,
    correctAnswerText: "Hypertension with bradycardia"
  },
  {
  id: 47,
  image: "",
  question:
    "A 25-year-old medical student is asked about the functional difference between cortical nephrons and juxtamedullary nephrons. Which of the following is the most important function of juxtamedullary nephrons?",
  options: [
    "Formation and excretion of waste products only",
    "Concentration of urine",
    "Glomerular filtration without tubular reabsorption",
    "Secretion of erythropoietin"
  ],
  answerIndex: 1,
  correctAnswerText: "Concentration of urine"
},
  {
    id: 178,
    image: "",
    question: "A young anxious patient develops rapid deep breathing before a minor procedure and soon complains of tingling around the mouth, carpopedal spasm, and muscle twitching. Which of the following is the most likely mechanism?",
    options: [
      "Increase in ionized calcium due to acidosis",
      "Decrease in ionized calcium due to increased calcium binding to albumin",
      "Increase in total body calcium due to hyperventilation",
      "Decrease in sodium channel excitability due to hypercalcemia"
    ],
    answerIndex: 1,
    correctAnswerText: "Decrease in ionized calcium due to increased calcium binding to albumin"
  },
  {
    id: 179,
    image: "",
    question: "A patient with uncontrolled diabetes mellitus is started on insulin therapy. In which of the following tissues does insulin directly increase glucose uptake by promoting translocation of GLUT-4 to the cell membrane?",
    options: [
      "Adipose tissue",
      "Brain",
      "Renal tubular epithelium",
      "Intestinal epithelium"
    ],
    answerIndex: 0,
    correctAnswerText: "Adipose tissue"
  },
  {
    id: 180,
    image: "",
    question: "Which of the following muscle proteins primarily covers the active sites on actin rather than acting as a structural attachment protein?",
    options: [
      "Titin",
      "Desmin",
      "Alpha-actinin",
      "Tropomyosin"
    ],
    answerIndex: 3,
    correctAnswerText: "Tropomyosin"
  },

];
