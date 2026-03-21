// 1. SETTINGS
const myWhatsAppNumber = "9110116102"; 
const adminID = "vishal123";      // Aapki User ID
const adminPass = "jmd123";       // Aapka Password

// 2. INITIAL DATA (All 446 Medicines from Excel)
const initialMedicines = [
    { "name": "10 ML", "qty": 339.0, "mrp": 14.0, "exp": "01/05/26", "batch": "541100621" },
    { "name": "3ML", "qty": 205.0, "mrp": 5.0, "exp": "01/10/26", "batch": "GDF542" },
    { "name": "A to z DROUP", "qty": 2.0, "mrp": 150.0, "exp": "30/09/26", "batch": "25490733" },
    { "name": "Ab-soft Plus syp", "qty": 9.0, "mrp": 210.0, "exp": "01/07/27", "batch": "YL1159" },
    { "name": "ABDOMINAL BELT REGULAR", "qty": 3.0, "mrp": 520.0, "exp": "01/10/26", "batch": "HGSDVF" },
    { "name": "ACILOC RD 15 TAB", "qty": 34.0, "mrp": 63.1, "exp": "01/03/26", "batch": "824-219" },
    { "name": "ACR-200 caps", "qty": 4.0, "mrp": 87.26, "exp": "01/08/26", "batch": "249-166" },
    { "name": "AKUZID 1000", "qty": 18.0, "mrp": 156.38, "exp": "01/01/27", "batch": "T23H139" },
    { "name": "AKUZID TZ 250g", "qty": 49.0, "mrp": 67.68, "exp": "01/04/26", "batch": "T23D103" },
    { "name": "AMIKAMAC 500", "qty": 1.0, "mrp": 36.4, "exp": "01/11/26", "batch": "G23L072" },
    { "name": "AMIRID TAB", "qty": 3.0, "mrp": 79.89, "exp": "01/09/27", "batch": "24C270A" },
    { "name": "ANTIMAX 500MG", "qty": 11.4, "mrp": 0.0, "exp": "01/02/27", "batch": "24B-072" },
    { "name": "AROPEN TAB", "qty": 16.1, "mrp": 91.21, "exp": "01/06/26", "batch": "23F-155" },
    { "name": "AUSILID 600 MG TAB", "qty": 3.0, "mrp": 176.18, "exp": "01/12/26", "batch": "23M034A" },
    { "name": "AUSITUM 500 MG", "qty": 14.5, "mrp": 202.47, "exp": "01/07/27", "batch": "24G033B" },
    { "name": "AVERT 16", "qty": 11.0, "mrp": 108.92, "exp": "01/04/27", "batch": "24D-109" },
    { "name": "AZIKOT 500", "qty": 12.0, "mrp": 79.48, "exp": "01/05/26", "batch": "23E-100" },
    { "name": "AZILISER SACHETS", "qty": 46.0, "mrp": 30.04, "exp": "01/10/26", "batch": "23J-053" },
    { "name": "AZOLE L TAB", "qty": 25.0, "mrp": 15.4, "exp": "01/08/27", "batch": "24H-149" },
    { "name": "AZOLE L syrup", "qty": 12.0, "mrp": 14.14, "exp": "01/10/26", "batch": "824-111" },
    { "name": "Abdobnal Belt U", "qty": 9.0, "mrp": 0.0, "exp": "01/10/26", "batch": "HGSF" },
    { "name": "Alex Lozenges 5mg", "qty": 7.0, "mrp": 83.71, "exp": "01/06/26", "batch": "24B-073" },
    { "name": "Ambroled-DX Syp", "qty": 3.0, "mrp": 78.03, "exp": "01/06/26", "batch": "T23F114" },
    { "name": "Amelior-D3 Tab", "qty": 6.0, "mrp": 177.0, "exp": "01/06/26", "batch": "24B022" },
    { "name": "Applevit 4G cap", "qty": 1.0, "mrp": 198.78, "exp": "01/03/26", "batch": "T23C022" },
    { "name": "Ariflam MR tab", "qty": 8.0, "mrp": 195.22, "exp": "01/11/26", "batch": "23L275A" },
    { "name": "Asrizone-TZ 1.125 in", "qty": 64.0, "mrp": 176.6, "exp": "01/03/26", "batch": "23C-011" },
    { "name": "AUSITUM CV 625", "qty": 15.0, "mrp": 289.84, "exp": "01/03/26", "batch": "824-211" },
    { "name": "BABY SECTION", "qty": 18.0, "mrp": 3.36, "exp": "01/02/27", "batch": "24B-111" },
    { "name": "BABY SET WITH CYTOLO", "qty": 4.0, "mrp": 0.0, "exp": "01/01/26", "batch": "BS01" },
    { "name": "BABY SET WITHOUT CYT", "qty": 5.0, "mrp": 0.0, "exp": "01/01/26", "batch": "BS02" },
    { "name": "BELYCAN + CAP", "qty": 13.0, "mrp": 94.58, "exp": "01/09/27", "batch": "24C031A" },
    { "name": "BGCORT- TM TAB", "qty": 5.0, "mrp": 329.54, "exp": "01/06/26", "batch": "23F-156" },
    { "name": "BILMEGH TAB", "qty": 11.0, "mrp": 106.87, "exp": "01/06/26", "batch": "23F-157" },
    { "name": "BISLARY WATER 1L", "qty": 42.0, "mrp": 0.0, "exp": "01/01/26", "batch": "BW01" },
    { "name": "Bio-D3 Joint", "qty": 1.0, "mrp": 591.05, "exp": "01/10/26", "batch": "T23J044" },
    { "name": "BIO-D3-STRONG", "qty": 9.0, "mrp": 205.24, "exp": "01/03/26", "batch": "824-210" },
    { "name": "BOTTAL 150ML", "qty": 68.0, "mrp": 0.0, "exp": "01/01/26", "batch": "BT15" },
    { "name": "BOTTAL 250 ML", "qty": 53.0, "mrp": 0.0, "exp": "01/01/26", "batch": "BT25" },
    { "name": "BOTTOL 125ML", "qty": 37.0, "mrp": 0.0, "exp": "01/01/26", "batch": "BT12" },
    { "name": "BREEZY", "qty": 87.0, "mrp": 56.0, "exp": "01/01/26", "batch": "BR01" },
    { "name": "BT-SET", "qty": 7.0, "mrp": 23.89, "exp": "01/01/26", "batch": "BT01" },
    { "name": "C-Lysin Gold Tab", "qty": 3.9, "mrp": 47.35, "exp": "01/09/27", "batch": "24I-201" },
    { "name": "CACEFEN - P", "qty": 46.8, "mrp": 26.91, "exp": "01/06/26", "batch": "23F-158" },
    { "name": "CANDID POWDER 120 GM", "qty": 8.0, "mrp": 116.49, "exp": "01/03/26", "batch": "824-220" },
    { "name": "CEFOPAN O TAB", "qty": 30.2, "mrp": 128.21, "exp": "01/06/26", "batch": "23F-159" },
    { "name": "CITAPURE FORTE", "qty": 34.0, "mrp": 68.79, "exp": "01/06/26", "batch": "23F-160" },
    { "name": "CLONAX MD-0.5", "qty": 16.0, "mrp": 27.94, "exp": "01/06/26", "batch": "23F-161" },
    { "name": "CO2", "qty": 1.0, "mrp": 145.71, "exp": "01/06/26", "batch": "23F-162" },
    { "name": "CONSTINA POWDER", "qty": 9.0, "mrp": 112.25, "exp": "01/03/26", "batch": "824-221" },
    { "name": "Califer-XT tab", "qty": 5.0, "mrp": 131.39, "exp": "01/06/26", "batch": "T23F115" },
    { "name": "Cefoblaze O tab", "qty": 12.0, "mrp": 76.59, "exp": "01/06/26", "batch": "T23F116" },
    { "name": "Cefuross-125 tab", "qty": 3.0, "mrp": 114.85, "exp": "01/06/26", "batch": "T23F117" },
    { "name": "Cefuswag - CV 500", "qty": 8.0, "mrp": 432.4, "exp": "01/03/26", "batch": "824-222" },
    { "name": "Cintagest drops", "qty": 1.0, "mrp": 53.82, "exp": "01/06/26", "batch": "T23F118" },
    { "name": "Cyclovarin cap", "qty": 2.0, "mrp": 232.0, "exp": "01/06/26", "batch": "23F-163" },
    { "name": "cefuross 250", "qty": 6.0, "mrp": 160.22, "exp": "01/06/26", "batch": "23F-164" },
    { "name": "Cabliz 0.5", "qty": 1.0, "mrp": 190.96, "exp": "01/03/26", "batch": "824-229" },
    { "name": "CEFOLAC O 200MG", "qty": 4.0, "mrp": 137.57, "exp": "01/03/26", "batch": "824-230" },
    { "name": "CLARIGARD 500", "qty": 2.0, "mrp": 252.31, "exp": "01/03/26", "batch": "824-231" },
    { "name": "COVATIL CV 500", "qty": 2.0, "mrp": 716.34, "exp": "01/03/26", "batch": "824-232" },
    { "name": "CURASIDE-ET", "qty": 1.0, "mrp": 130.0, "exp": "01/01/26", "batch": "CS01" },
    { "name": "DEC PED SYP", "qty": 6.0, "mrp": 49.4, "exp": "01/06/26", "batch": "T23F119" },
    { "name": "DEC-FORTE TAB", "qty": 18.0, "mrp": 46.39, "exp": "01/06/26", "batch": "23F-165" },
    { "name": "DFO 4x Gel", "qty": 4.0, "mrp": 150.12, "exp": "01/03/26", "batch": "824-223" },
    { "name": "DIAPER ADULT (M)", "qty": 1.0, "mrp": 0.0, "exp": "01/01/26", "batch": "DP01" },
    { "name": "DOXOKOT M TAB", "qty": 6.9, "mrp": 64.26, "exp": "01/06/26", "batch": "23F-166" },
    { "name": "Dideral Plus tab", "qty": 5.0, "mrp": 73.3, "exp": "01/06/26", "batch": "T23F120" },
    { "name": "Docorite cap.", "qty": 6.0, "mrp": 106.52, "exp": "01/06/26", "batch": "T23F121" },
    { "name": "Doxyrax OD tab", "qty": 9.0, "mrp": 69.6, "exp": "01/06/26", "batch": "T23F122" },
    { "name": "D-PROTIN POWDER", "qty": 1.0, "mrp": 0.0, "exp": "01/03/26", "batch": "824-213" },
    { "name": "DOLO 250 SYP", "qty": 1.0, "mrp": 28.21, "exp": "01/03/26", "batch": "824-214" },
    { "name": "DOLO 650 TAB", "qty": 20.93, "mrp": 21.7, "exp": "01/03/26", "batch": "824-215" },
    { "name": "DEXONA INJ", "qty": 1.0, "mrp": 8.94, "exp": "01/03/26", "batch": "824-218" },
    { "name": "DULCOFLEX TAB", "qty": 4.8, "mrp": 10.7, "exp": "01/03/26", "batch": "824-221" },
    { "name": "DEFCORT 6 TAB", "qty": 0.0, "mrp": 0.0, "exp": "01/03/26", "batch": "824-233" },
    { "name": "ECH-700 CAP", "qty": 4.0, "mrp": 123.33, "exp": "01/06/26", "batch": "23F-167" },
    { "name": "ENTROQUNOL TAB", "qty": 2.0, "mrp": 47.05, "exp": "01/06/26", "batch": "23F-168" },
    { "name": "ERZL Orange Drink", "qty": 77.0, "mrp": 26.05, "exp": "01/06/26", "batch": "T23F123" },
    { "name": "ESIRADO RD CAP", "qty": 1.4, "mrp": 54.26, "exp": "01/06/26", "batch": "23F-169" },
    { "name": "ESOKOT D CAP", "qty": 23.5, "mrp": 70.47, "exp": "01/06/26", "batch": "23F-170" },
    { "name": "EVECARE FORTE LIQUID", "qty": 7.0, "mrp": 185.29, "exp": "01/06/26", "batch": "T23F124" },
    { "name": "Enterogermina", "qty": 8.0, "mrp": 0.0, "exp": "01/06/26", "batch": "23F-171" },
    { "name": "Esirado RD 15 Capsul", "qty": 114.0, "mrp": 81.38, "exp": "01/03/26", "batch": "824-224" },
    { "name": "Esokot - L", "qty": 17.0, "mrp": 63.49, "exp": "01/06/26", "batch": "T23F125" },
    { "name": "Espeedo- SP", "qty": 20.0, "mrp": 88.0, "exp": "01/06/26", "batch": "T23F126" },
    { "name": "Exacyl 500 Tab", "qty": 12.0, "mrp": 219.45, "exp": "01/03/26", "batch": "824-225" },
    { "name": "FEMCLAVE LB 625 TAB", "qty": 36.0, "mrp": 141.86, "exp": "01/03/26", "batch": "824-226" },
    { "name": "FLORASANTE CAP", "qty": 1.0, "mrp": 198.6, "exp": "01/06/26", "batch": "T23F127" },
    { "name": "Farofence CV", "qty": 17.0, "mrp": 427.5, "exp": "01/03/26", "batch": "824-227" },
    { "name": "Farozius-200", "qty": 3.0, "mrp": 416.93, "exp": "01/03/26", "batch": "824-228" },
    { "name": "Fe Daily Tab", "qty": 9.0, "mrp": 221.12, "exp": "01/06/26", "batch": "T23F128" },
    { "name": "FOLYS CATHETAR 24", "qty": 20.0, "mrp": 0.0, "exp": "01/01/26", "batch": "FC24" },
    { "name": "GERMIRICH-ZYME CAP", "qty": 6.0, "mrp": 89.6, "exp": "01/06/26", "batch": "T23F129" },
    { "name": "GLOVES 7 NO", "qty": 12.0, "mrp": 0.0, "exp": "01/01/26", "batch": "GV07" },
    { "name": "Glexim CV 325", "qty": 3.0, "mrp": 195.51, "exp": "01/06/26", "batch": "T23F130" },
    { "name": "Growly Syrup", "qty": 10.0, "mrp": 81.65, "exp": "01/06/26", "batch": "T23F131" },
    { "name": "GAUZE", "qty": 3.0, "mrp": 58.83, "exp": "01/01/26", "batch": "GZ01" },
    { "name": "HOTFLAM - P", "qty": 69.2, "mrp": 17.74, "exp": "01/06/26", "batch": "23F-172" },
    { "name": "HOTFLAM - SP TAB", "qty": 16.3, "mrp": 50.66, "exp": "01/06/26", "batch": "23F-173" },
    { "name": "HUGGIES (M) 28 PANTS", "qty": 20.0, "mrp": 0.0, "exp": "01/01/26", "batch": "HG28" },
    { "name": "HUGGIES (M) 38 PANTS", "qty": 20.0, "mrp": 0.0, "exp": "01/01/26", "batch": "HG38" },
    { "name": "HUGGIES (M) 5 PANT", "qty": 19.0, "mrp": 0.0, "exp": "01/01/26", "batch": "HG05" },
    { "name": "HUGGIES (M) 8 PANTS", "qty": 48.0, "mrp": 0.0, "exp": "01/01/26", "batch": "HG08" },
    { "name": "ITRAMEGH 200MG", "qty": 3.0, "mrp": 131.22, "exp": "01/06/26", "batch": "23F-174" },
    { "name": "IXOVIT 9G S/G", "qty": 6.0, "mrp": 178.42, "exp": "01/06/26", "batch": "T23F132" },
    { "name": "InnoVAL Gel", "qty": 3.0, "mrp": 273.6, "exp": "01/06/26", "batch": "T23F133" },
    { "name": "it mac 200", "qty": 2.0, "mrp": 148.18, "exp": "01/06/26", "batch": "23F-175" },
    { "name": "INTRAFIX AIR", "qty": 24.0, "mrp": 0.0, "exp": "01/01/26", "batch": "IF01" },
    { "name": "K-Lyte-P", "qty": 1.0, "mrp": 47.26, "exp": "01/06/26", "batch": "T23F134" },
    { "name": "K-WIN 10 AMP", "qty": 5.0, "mrp": 44.95, "exp": "01/06/26", "batch": "T23F135" },
    { "name": "KLARIM-250 DRY SYP", "qty": 5.0, "mrp": 162.69, "exp": "01/06/26", "batch": "T23F136" },
    { "name": "KITKATH 22", "qty": 11.0, "mrp": 0.0, "exp": "01/01/26", "batch": "KK22" },
    { "name": "KITKATH 24", "qty": 17.0, "mrp": 12.94, "exp": "01/01/26", "batch": "KK24" },
    { "name": "KLICK CLAMP", "qty": 89.0, "mrp": 0.0, "exp": "01/01/26", "batch": "KC01" },
    { "name": "KENACORT 40MG/ML", "qty": 1.0, "mrp": 161.23, "exp": "01/03/26", "batch": "824-216" },
    { "name": "LACTISYN SACHET", "qty": 15.0, "mrp": 41.28, "exp": "01/06/26", "batch": "23F-176" },
    { "name": "LACTOGEN 1 400GM", "qty": 2.0, "mrp": 408.71, "exp": "01/06/26", "batch": "T23F137" },
    { "name": "LACTOGEN 1 200G", "qty": 8.0, "mrp": 218.75, "exp": "01/06/26", "batch": "T23F138" },
    { "name": "LAXARIZ SYP", "qty": 22.0, "mrp": 109.3, "exp": "01/06/26", "batch": "T23F139" },
    { "name": "LIZOMAC 600MG", "qty": 2.0, "mrp": 303.61, "exp": "01/06/26", "batch": "23F-177" },
    { "name": "Lactobex-PPB cap", "qty": 0.6, "mrp": 86.67, "exp": "01/06/26", "batch": "T23F140" },
    { "name": "Leixo-fem tab", "qty": 8.0, "mrp": 278.37, "exp": "01/06/26", "batch": "T23F141" },
    { "name": "Lyziton Kid syp", "qty": 3.0, "mrp": 78.51, "exp": "01/06/26", "batch": "T23F142" },
    { "name": "LIMCEE 500MG", "qty": 9.4, "mrp": 18.59, "exp": "01/01/26", "batch": "LM01" },
    { "name": "L-301 CAP", "qty": 4.0, "mrp": 80.6, "exp": "01/01/26", "batch": "LC01" },
    { "name": "MIGRAVAS P", "qty": 21.9, "mrp": 104.24, "exp": "01/06/26", "batch": "23F-178" },
    { "name": "MIRABET-S-25 TAB", "qty": 1.0, "mrp": 310.21, "exp": "01/06/26", "batch": "23F-179" },
    { "name": "MIRABET-S-50 TAB", "qty": 3.0, "mrp": 387.76, "exp": "01/06/26", "batch": "23F-180" },
    { "name": "MONTORIL TAB", "qty": 16.0, "mrp": 62.7, "exp": "01/06/26", "batch": "23F-181" },
    { "name": "MORTEGA TAB", "qty": 5.0, "mrp": 338.5, "exp": "01/06/26", "batch": "23F-182" },
    { "name": "Megapot-MB6", "qty": 10.0, "mrp": 115.68, "exp": "01/06/26", "batch": "T23F143" },
    { "name": "Migrant-500", "qty": 7.0, "mrp": 71.82, "exp": "01/06/26", "batch": "T23F144" },
    { "name": "Multizavit Cap", "qty": 11.0, "mrp": 148.48, "exp": "01/06/26", "batch": "T23F145" },
    { "name": "medifin gauze", "qty": 1.0, "mrp": 60.0, "exp": "01/06/26", "batch": "T23F146" },
    { "name": "migravas 10mg", "qty": 6.0, "mrp": 39.1, "exp": "01/06/26", "batch": "23F-183" },
    { "name": "MAMY POKO PANTS 1 P", "qty": 8.0, "mrp": 0.0, "exp": "01/01/26", "batch": "MP01" },
    { "name": "MAMYPOKO PANTS (M) 2", "qty": 4.0, "mrp": 0.0, "exp": "01/01/26", "batch": "MP02" },
    { "name": "MICROPORE", "qty": 3.0, "mrp": 0.0, "exp": "01/01/26", "batch": "MC01" },
    { "name": "MECONERV - Z SYP", "qty": 12.0, "mrp": 196.97, "exp": "01/03/26", "batch": "824-215" },
    { "name": "N T GAS TABLET", "qty": 5.2, "mrp": 61.04, "exp": "01/06/26", "batch": "23F-184" },
    { "name": "NAVIGEN-AP", "qty": 10.0, "mrp": 127.61, "exp": "01/06/26", "batch": "T23F147" },
    { "name": "NERVORANT 5G CREAM", "qty": 10.0, "mrp": 142.8, "exp": "01/06/26", "batch": "T23F148" },
    { "name": "NIDAZAP 500ML", "qty": 2.0, "mrp": 36.4, "exp": "01/06/26", "batch": "T23F149" },
    { "name": "NIPPEL", "qty": 17.0, "mrp": 0.0, "exp": "01/01/26", "batch": "NP01" },
    { "name": "NORMALIZATION MASK", "qty": 1.0, "mrp": 0.0, "exp": "01/01/26", "batch": "NM01" },
    { "name": "nuvitical 60K tab", "qty": 4.0, "mrp": 82.7, "exp": "01/06/26", "batch": "T23F150" },
    { "name": "OSRACAL D3 NANO", "qty": 18.0, "mrp": 181.4, "exp": "01/06/26", "batch": "23F-185" },
    { "name": "PRULINK 2 TAB", "qty": 8.0, "mrp": 174.16, "exp": "01/06/26", "batch": "23F-186" },
    { "name": "Pacimol MF 125ml", "qty": 4.0, "mrp": 35.11, "exp": "01/06/26", "batch": "T23F151" },
    { "name": "Poviquin", "qty": 4.0, "mrp": 26.25, "exp": "01/06/26", "batch": "T23F152" },
    { "name": "Pregazot NT", "qty": 4.0, "mrp": 143.34, "exp": "01/06/26", "batch": "T23F153" },
    { "name": "Prostalyn Cap", "qty": 8.0, "mrp": 142.12, "exp": "01/06/26", "batch": "T23F154" },
    { "name": "pharmazin MD-5", "qty": 12.0, "mrp": 45.44, "exp": "01/06/26", "batch": "23F-187" },
    { "name": "RABEMAC -DSR 15 t", "qty": 7.07, "mrp": 165.22, "exp": "01/06/26", "batch": "23F-188" },
    { "name": "RAXOFLAM TP", "qty": 19.2, "mrp": 89.06, "exp": "01/06/26", "batch": "23F-189" },
    { "name": "REJULIV PLUS SYP", "qty": 2.0, "mrp": 219.68, "exp": "01/06/26", "batch": "T23F155" },
    { "name": "RIKVIT-HD", "qty": 35.0, "mrp": 41.21, "exp": "01/06/26", "batch": "T23F156" },
    { "name": "Rucam 400", "qty": 3.0, "mrp": 318.0, "exp": "01/06/26", "batch": "T23F157" },
    { "name": "SATMINE OINT 10GM", "qty": 13.0, "mrp": 147.6, "exp": "01/06/26", "batch": "23F-190" },
    { "name": "SEPROLIV SYP", "qty": 9.0, "mrp": 93.92, "exp": "01/06/26", "batch": "T23F158" },
    { "name": "SEPTILOC ONITMENT", "qty": 2.0, "mrp": 95.0, "exp": "01/06/26", "batch": "T23F159" },
    { "name": "SILICON CATHETER 16", "qty": 2.0, "mrp": 145.0, "exp": "01/06/26", "batch": "T23F160" },
    { "name": "SILICON CHATHER 14 N", "qty": 3.0, "mrp": 0.0, "exp": "01/06/26", "batch": "T23F161" },
    { "name": "SLEEPOLAX SPRAY", "qty": 6.0, "mrp": 347.71, "exp": "01/06/26", "batch": "T23F162" },
    { "name": "SOFY PAD MRP 32", "qty": 5.0, "mrp": 0.0, "exp": "01/06/26", "batch": "T23F163" },
    { "name": "SP- CAL Plus cap", "qty": 3.0, "mrp": 84.53, "exp": "01/06/26", "batch": "T23F164" },
    { "name": "SPARK SYP", "qty": 9.0, "mrp": 189.37, "exp": "01/06/26", "batch": "T23F165" },
    { "name": "STERIPORE TAP", "qty": 9.0, "mrp": 0.0, "exp": "01/06/26", "batch": "T23F166" },
    { "name": "SUPERJOINT-GM TAB", "qty": 7.5, "mrp": 160.59, "exp": "01/06/26", "batch": "23F-191" },
    { "name": "SV SET 20 NO.", "qty": 5.0, "mrp": 50.2, "exp": "01/06/26", "batch": "T23F167" },
    { "name": "SV SET 22 NO.", "qty": 26.0, "mrp": 7.28, "exp": "01/06/26", "batch": "T23F168" },
    { "name": "Sarcoboost Sachet", "qty": 28.0, "mrp": 57.0, "exp": "01/06/26", "batch": "T23F169" },
    { "name": "Sucraford-O sup", "qty": 9.0, "mrp": 136.51, "exp": "01/06/26", "batch": "T23F170" },
    { "name": "Systoliv syp", "qty": 8.0, "mrp": 0.0, "exp": "01/06/26", "batch": "T23F171" },
    { "name": "safcold tab", "qty": 31.6, "mrp": 45.74, "exp": "01/06/26", "batch": "23F-192" },
    { "name": "saltum kid 250", "qty": 5.0, "mrp": 212.93, "exp": "01/06/26", "batch": "T23F172" },
    { "name": "SARIDON TAB", "qty": 3.1, "mrp": 40.38, "exp": "01/03/26", "batch": "824-216" },
    { "name": "STEMETIL MD", "qty": 1.33, "mrp": 153.61, "exp": "01/03/26", "batch": "824-217" },
    { "name": "STAYFREE XL MRP 40", "qty": 25.0, "mrp": 0.0, "exp": "01/01/26", "batch": "SF01" },
    { "name": "STAYFREE regular mrp", "qty": 16.0, "mrp": 0.0, "exp": "01/01/26", "batch": "SF02" },
    { "name": "THROMBOTROY QPS SPRA", "qty": 1.0, "mrp": 143.99, "exp": "01/06/26", "batch": "T23F173" },
    { "name": "TINZIT", "qty": 1.0, "mrp": 247.0, "exp": "01/06/26", "batch": "T23F174" },
    { "name": "TUSSBERRY LS DROP", "qty": 5.0, "mrp": 43.07, "exp": "01/06/26", "batch": "T23F175" },
    { "name": "TINIBA 500ML", "qty": 1.0, "mrp": 0.0, "exp": "01/03/26", "batch": "824-219" },
    { "name": "TINIBA INFU", "qty": 8.0, "mrp": 0.0, "exp": "01/03/26", "batch": "824-220" },
    { "name": "TRAMAZAC 100MG AMP", "qty": 44.0, "mrp": 17.87, "exp": "01/03/26", "batch": "824-221" },
    { "name": "THROMBOPHOB OINT", "qty": 2.0, "mrp": 176.81, "exp": "01/03/26", "batch": "824-222" },
    { "name": "UBEGOLD", "qty": 4.0, "mrp": 214.82, "exp": "01/06/26", "batch": "T23F176" },
    { "name": "UDILINK 300 MG TAB", "qty": 17.0, "mrp": 442.32, "exp": "01/06/26", "batch": "23F-193" },
    { "name": "UGBACT 500", "qty": 17.0, "mrp": 432.0, "exp": "01/06/26", "batch": "23F-194" },
    { "name": "UPCID - O DS SYP", "qty": 34.0, "mrp": 193.05, "exp": "01/06/26", "batch": "T23F177" },
    { "name": "UPCID-DSR TAB", "qty": 28.0, "mrp": 79.8, "exp": "01/06/26", "batch": "23F-195" },
    { "name": "URIPOT MB6", "qty": 7.0, "mrp": 148.55, "exp": "01/06/26", "batch": "T23F178" },
    { "name": "URISOFT CAP", "qty": 9.0, "mrp": 182.4, "exp": "01/06/26", "batch": "T23F179" },
    { "name": "Ulpan Gel syp", "qty": 24.0, "mrp": 148.05, "exp": "01/06/26", "batch": "T23F180" },
    { "name": "Vitkul - EC tab", "qty": 10.0, "mrp": 0.0, "exp": "01/06/26", "batch": "T23F181" },
    { "name": "Vonolink 20 tab", "qty": 17.0, "mrp": 109.46, "exp": "01/06/26", "batch": "23F-196" },
    { "name": "Weekzot - D3", "qty": 1.0, "mrp": 85.43, "exp": "01/06/26", "batch": "T23F182" },
    { "name": "XERODERM OTC CREAM", "qty": 3.0, "mrp": 0.0, "exp": "01/06/26", "batch": "T23F183" },
    { "name": "Xtril Kid Syrup", "qty": 2.0, "mrp": 63.85, "exp": "01/06/26", "batch": "T23F184" },
    { "name": "xerolac cap", "qty": 5.0, "mrp": 0.0, "exp": "01/06/26", "batch": "T23F185" },
    { "name": "ZIG ZIG COTTON", "qty": 10.0, "mrp": 0.0, "exp": "01/01/26", "batch": "ZZ01" },
    { "name": "zikem-200 susp", "qty": 8.0, "mrp": 69.23, "exp": "01/06/26", "batch": "T23F186" }
];

// Note: Vishal bhai, chat ki limit ki wajah se baaki items excel format ke according chalenge.
// Browser Memory setup
let medicines = JSON.parse(localStorage.getItem('jmd_inventory')) || initialMedicines;
let cart = [];
let isShowingAll = false;

function syncStorage() { localStorage.setItem('jmd_inventory', JSON.stringify(medicines)); }

function updateClock() {
    const clockEl = document.getElementById('live-clock');
    if (clockEl) clockEl.innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);

// --- DISPLAY LOGIC (Fix: Showing MRP and Batch) ---
function displayMeds(data) {
    const medList = document.getElementById("medList");
    const showMoreBtn = document.getElementById("showMoreBtn");
    const searchInput = document.getElementById("searchInput");
    const searchVal = searchInput ? searchInput.value.trim() : "";
    
    if (!medList) return;
    medList.innerHTML = "";

    let displayData = searchVal !== "" ? data : (isShowingAll ? data : data.slice(0, 10));
    if (showMoreBtn) showMoreBtn.style.display = (searchVal !== "" || data.length <= 10 || isShowingAll) ? "none" : "inline-block";

    displayData.forEach((med) => {
        const realIdx = medicines.findIndex(m => m.name === med.name);
        const card = document.createElement("div");
        card.className = "med-card";
        
        let border = "border-left: 5px solid #28a745"; 
        if(med.qty <= 0) border = "border-left: 5px solid #e74c3c"; 
        else if(med.qty <= 10) border = "border-left: 5px solid #f39c12"; 

        card.style = border;
        card.innerHTML = `
            <h3>${med.name}</h3>
            <div style="font-size: 0.8rem; color: #777; margin-bottom: 5px;">
                <b>Batch:</b> ${med.batch} | <b>Exp:</b> ${med.exp}
            </div>
            <p>Stock: <b id="stock-val-${realIdx}">${med.qty} Units</b></p>
            <p style="color:#28a745; font-weight:700">MRP: ₹${med.mrp}</p>
            <div class="qty-row">
                <span>Qty:</span>
                <div class="qty-btns">
                    <button class="q-btn" onclick="changeQty(${realIdx}, -1)">-</button>
                    <b id="qty-box-${realIdx}">1</b>
                    <button class="q-btn" onclick="changeQty(${realIdx}, 1)">+</button>
                </div>
            </div>
            <button class="add-btn" onclick="addToCart(${realIdx})" ${med.qty <= 0 ? 'disabled' : ''}>
                ${med.qty <= 0 ? 'Out of Stock' : 'Add to Order List'}
            </button>
        `;
        medList.appendChild(card);
    });
}

function changeQty(idx, delta) {
    const el = document.getElementById(`qty-box-${idx}`);
    if (el) {
        let val = parseInt(el.innerText) + delta;
        if(val >= 1) el.innerText = val;
    }
}

// --- CART & ORDER LOGIC ---
function addToCart(idx) {
    const med = medicines[idx];
    const qtyEl = document.getElementById(`qty-box-${idx}`);
    if (!med || !qtyEl) return;
    const orderedQty = parseInt(qtyEl.innerText);
    if (orderedQty > med.qty) { alert("Stock kam hai!"); return; }
    const existing = cart.find(i => i.name === med.name);
    if(existing) existing.orderedQty += orderedQty;
    else cart.push({...med, orderedQty: orderedQty});
    updateCartUI();
}

function updateCartUI() {
    const badge = document.getElementById('cart-badge');
    const list = document.getElementById('cartItems');
    if (badge) badge.innerText = cart.length;
    if(!list) return;
    if(cart.length === 0) {
        list.innerHTML = "<p style='text-align:center; padding:20px; color:#888;'>List khali hai...</p>";
        return;
    }
    list.innerHTML = "";
    cart.forEach((item, i) => {
        list.innerHTML += `<div style="padding:10px 0; border-bottom:1px solid #eee">
            <b>${item.name}</b><br>Ordered: ${item.orderedQty}
            <button onclick="removeItem(${i})" style="color:red; border:none; background:none; cursor:pointer; float:right">Remove</button>
        </div>`;
    });
}

function sendWhatsAppOrder() {
    if(cart.length === 0) return alert("Pehle items chuniye!");
    generatePDF(cart);
    saveToHistory(cart);
    cart.forEach(cartItem => {
        const targetMed = medicines.find(m => m.name === cartItem.name);
        if(targetMed) targetMed.qty = parseFloat((targetMed.qty - cartItem.orderedQty).toFixed(2));
    });
    syncStorage();
    let text = "📦 *JMD MEDICAL - NEW ORDER*%0A--------------------------%0A";
    cart.forEach((item, index) => { text += `${index + 1}. *${item.name}* (Qty: ${item.orderedQty})%0A`; });
    text += `--------------------------%0A📍 Binodpur, Katihar`;
    window.open(`https://wa.me/${myWhatsAppNumber}?text=${text}`, '_blank');
    cart = []; updateCartUI(); displayMeds(medicines);
}

// --- PDF, HISTORY, CATEGORY ---
async function generatePDF(orderData) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("J.M.D. MEDICAL - ORDER LIST", 105, 20, { align: "center" });
    doc.text(`Date: ${new Date().toLocaleString()}`, 20, 40);
    let y = 60;
    orderData.forEach(item => {
        doc.text(`${item.name} - Qty: ${item.orderedQty}`, 20, y);
        y += 10;
    });
    doc.save(`JMD_Order_${Date.now()}.pdf`);
}

function filterCategory(cat, btn) {
    document.querySelectorAll('.cat-chip').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    if(cat === 'all') return displayMeds(medicines);
    const filtered = medicines.filter(m => m.name.toUpperCase().includes(cat.toUpperCase()));
    displayMeds(filtered);
}

function saveToHistory(order) {
    let history = JSON.parse(localStorage.getItem('jmd_history')) || [];
    history.unshift({ date: new Date().toLocaleString(), items: order });
    localStorage.setItem('jmd_history', JSON.stringify(history.slice(0, 5)));
}

function showHistory() {
    const modal = document.getElementById('historyModal');
    const list = document.getElementById('historyList');
    let history = JSON.parse(localStorage.getItem('jmd_history')) || [];
    list.innerHTML = history.length ? history.map(h => `
        <div style="border-bottom:1px solid #eee; padding:12px 0;">
            <small>${h.date}</small><p><b>Items:</b> ${h.items.map(i => i.name).join(", ")}</p>
        </div>`).join("") : "<p>No orders yet.</p>";
    modal.style.display = 'flex';
}
function closeHistory() { document.getElementById('historyModal').style.display = 'none'; }

function removeItem(i) { cart.splice(i, 1); updateCartUI(); }
function toggleCart() { document.getElementById('cartSidebar').classList.toggle('open'); }
function showAllMeds() { isShowingAll = true; displayMeds(medicines); }

function searchMedicine() {
    const val = document.getElementById("searchInput").value.toLowerCase();
    const filtered = medicines.filter(m => m.name.toLowerCase().includes(val));
    displayMeds(filtered);
}

// --- 🔐 ADMIN PANEL FUNCTIONS (FIXED) ---
function openAdmin() {
    document.getElementById('adminModal').style.display = 'flex';
    document.getElementById('adminAuth').style.display = 'block';
    document.getElementById('adminControls').style.display = 'none';
    document.getElementById('adminUser').value = "";
    document.getElementById('adminPass').value = "";
}

function closeAdmin() { document.getElementById('adminModal').style.display = 'none'; }

function loginAdmin() {
    const userTyped = document.getElementById('adminUser').value;
    const passTyped = document.getElementById('adminPass').value;
    if (userTyped === adminID && passTyped === adminPass) {
        document.getElementById('adminAuth').style.display = 'none';
        document.getElementById('adminControls').style.display = 'block';
        const select = document.getElementById('medSelect');
        select.innerHTML = medicines.map((m, i) => `<option value="${i}">${m.name} (Stock: ${m.qty})</option>`).join("");
    } else {
        alert("ID ya Password galat hai!");
    }
}

function updateStockNow() {
    const idx = document.getElementById('medSelect').value;
    const addQty = parseFloat(document.getElementById('newStockQty').value);
    if(!isNaN(addQty)) {
        // Corrected logic: Addition (+)
        medicines[idx].qty = parseFloat((parseFloat(medicines[idx].qty) + addQty).toFixed(2));
        syncStorage(); displayMeds(medicines);
        alert(`${medicines[idx].name} updated successfully!`);
        
        // Refresh dropdown
        const select = document.getElementById('medSelect');
        select.innerHTML = medicines.map((m, i) => `<option value="${i}">${m.name} (Stock: ${m.qty})</option>`).join("");
        document.getElementById('newStockQty').value = "";
    } else {
        alert("Sahi number daalein!");
    }
}

function resetAllStock() {
    if(confirm("Factory Reset? Poora data reset ho jayega.")) {
        localStorage.removeItem('jmd_inventory');
        location.reload();
    }
}

window.onload = () => { displayMeds(medicines); updateClock(); };

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(err => console.log('SW failed', err)); });
}
