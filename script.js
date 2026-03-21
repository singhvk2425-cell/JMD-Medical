// 1. SETTINGS
const myWhatsAppNumber = "9110116102"; 
const adminID = "vishal123";      
const adminPass = "jmd123";       

// 2. INITIAL DATA (Total 443 Items)
const initialMedicines = [
    { "name": "10 ML", "qty": 339.0, "mrp": 14.0, "exp": "01/05/26", "batch": "541100621" },
    { "name": "3ML", "qty": 205.0, "mrp": 5.0, "exp": "01/10/26", "batch": "GDF542" },
    { "name": "A to z DROUP", "qty": 2.0, "mrp": 150.0, "exp": "30/09/26", "batch": "25490733" },
    { "name": "Ab-soft Plus syp", "qty": 9.0, "mrp": 210.0, "exp": "01/07/27", "batch": "YL1159" },
    { "name": "ABDOMINAL BELT REGULAR", "qty": 3.0, "mrp": 520.0, "exp": "01/10/26", "batch": "HGSDVF" },
    { "name": "ACILOC 150TAB", "qty": 15.009, "mrp": 49.1, "exp": "31/10/26", "batch": "LD24242" },
    { "name": "ACILOC 300", "qty": 2.005, "mrp": 54.8, "exp": "30/11/26", "batch": "LO24138" },
    { "name": "ACILOC AMP", "qty": 4.0, "mrp": 7.2, "exp": "31/07/27", "batch": "IN24091" },
    { "name": "ACILOC RD 15 TAB", "qty": 34.0, "mrp": 92.3, "exp": "31/03/27", "batch": "JKAD25011" },
    { "name": "ACR-200 caps", "qty": 4.0, "mrp": 122.0, "exp": "30/11/25", "batch": "GC4612A" },
    { "name": "AKUZID 1000", "qty": 18.0, "mrp": 254.24, "exp": "28/02/27", "batch": "25DI14F" },
    { "name": "AKUZID TZ 250g", "qty": 49.0, "mrp": 114.0, "exp": "28/02/27", "batch": "25DI03G" },
    { "name": "ALEX  P  SYP", "qty": 2.0, "mrp": 158.43, "exp": "31/10/27", "batch": "11251479" },
    { "name": "Alex Lozenges 5mg", "qty": 7.0, "mrp": 118.0, "exp": "31/10/26", "batch": "73230086" },
    { "name": "Ambroled-DX Syp", "qty": 3.0, "mrp": 113.0, "exp": "30/09/27", "batch": "STY-250212" },
    { "name": "Amelior-D3  Tab", "qty": 4.0, "mrp": 225.0, "exp": "01/06/25", "batch": "SHT-085" },
    { "name": "AMIKAMAC 500", "qty": 1.0, "mrp": 113.73, "exp": "30/09/26", "batch": "18242802A" },
    { "name": "AMIRID TAB", "qty": 3.0, "mrp": 111.0, "exp": "30/06/26", "batch": "2424303" },
    { "name": "ANTIMAX 500MG", "qty": 11.004, "mrp": 570.0, "exp": "01/06/27", "batch": "STB-250704" },
    { "name": "Applevit 4G cap", "qty": 1.0, "mrp": 267.19, "exp": "30/04/27", "batch": "1120525D" },
    { "name": "AQUASOL A", "qty": 5.0, "mrp": 35.75, "exp": "31/03/26", "batch": "49001916" },
    { "name": "Ariflam MR tab", "qty": 8.0, "mrp": 274.0, "exp": "30/11/26", "batch": "LT2412180" },
    { "name": "ARISTOZYME LIQUID", "qty": 1.0, "mrp": 162.0, "exp": "30/11/26", "batch": "MPF252098" },
    { "name": "AROPEN TAB", "qty": 16.001, "mrp": 120.0, "exp": "28/02/27", "batch": "02125001" },
    { "name": "Asrizone-TZ 1.125 inj", "qty": 64.0, "mrp": 347.0, "exp": "31/03/27", "batch": "25DD34G" },
    { "name": "AUSILID 600 MG TAB", "qty": 3.0, "mrp": 220.0, "exp": "31/05/26", "batch": "24S2GTB393" },
    { "name": "AUSITUM 500 MG", "qty": 0.005, "mrp": 320.0, "exp": "30/04/25", "batch": "MF5AK09" },
    { "name": "AUSITUM CV 625", "qty": 13.0, "mrp": 489.0, "exp": "31/07/26", "batch": "GLT25021" },
    { "name": "AVERT 16", "qty": 1.0, "mrp": 151.95, "exp": "31/12/27", "batch": "P-9620" },
    { "name": "AZIKOT 500", "qty": 12.0, "mrp": 134.25, "exp": "30/04/27", "batch": "UTN-25804" },
    { "name": "AZILISER SACHETS", "qty": 6.0, "mrp": 42.0, "exp": "31/05/26", "batch": "MNS-122449" },
    { "name": "AZITHRAL 250 MG", "qty": 1.0, "mrp": 132.94, "exp": "31/05/27", "batch": "2508000808" },
    { "name": "AZITHRAL 250MG", "qty": 1.0, "mrp": 130.48, "exp": "31/08/26", "batch": "AZBS0101" },
    { "name": "AZITHRAL XL 200 LIQ", "qty": 2.0, "mrp": 121.8, "exp": "28/02/27", "batch": "2508000304" },
    { "name": "AZOLE L syrup", "qty": 12.0, "mrp": 19.8, "exp": "31/08/27", "batch": "AZ-2502" },
    { "name": "AZOLE L TAB", "qty": 25.0, "mrp": 24.0, "exp": "31/07/27", "batch": "ALE-13" },
    { "name": "BABY SECTION", "qty": 15.0, "mrp": 93.0, "exp": "01/03/27", "batch": "4293" },
    { "name": "BABY SET WITH CYTOLOG TAB", "qty": 4.0, "mrp": 304.0, "exp": "01/12/26", "batch": "BABY304" },
    { "name": "BABY SET WITHOUT CYTLOG", "qty": 5.0, "mrp": 205.0, "exp": "01/10/27", "batch": "BABY245" },
    { "name": "Bacilon Cap", "qty": 4.0, "mrp": 340.0, "exp": "31/01/27", "batch": "RPH2503" },
    { "name": "BANDASE 4", "qty": 1.0, "mrp": 360.0, "exp": "31/05/26", "batch": "205" },
    { "name": "BANDASE 6", "qty": 24.0, "mrp": 38.8, "exp": "01/06/26", "batch": "35" },
    { "name": "BANDY PLUS SYP", "qty": 1.0, "mrp": 42.27, "exp": "31/08/27", "batch": "B0AGY038" },
    { "name": "BANDY PLUS TAB", "qty": 31.0, "mrp": 33.85, "exp": "29/02/28", "batch": "A8AGY049" },
    { "name": "BELYCAN + CAP", "qty": 3.0, "mrp": 148.5, "exp": "31/05/26", "batch": "D2415064" },
    { "name": "BETADINE 100 ML", "qty": 1.0, "mrp": 109.76, "exp": "30/04/27", "batch": "ME02025" },
    { "name": "BGCORT- TM TAB", "qty": 5.0, "mrp": 520.0, "exp": "31/10/26", "batch": "JT-2405653" },
    { "name": "BILMEGH TAB", "qty": 11.0, "mrp": 180.0, "exp": "30/06/27", "batch": "DMV02ACA" },
    { "name": "Bio-D3 Joint", "qty": 1.0, "mrp": 874.0, "exp": "30/11/26", "batch": "BID5T06" },
    { "name": "BISLARY WATER 1L", "qty": 42.0, "mrp": 20.0, "exp": "01/12/25", "batch": "4875" },
    { "name": "BOTTAL 150ML", "qty": 68.0, "mrp": 50.0, "exp": "31/10/27", "batch": "3254" },
    { "name": "BREEZY", "qty": 87.0, "mrp": 80.0, "exp": "31/03/27", "batch": "BB7784" },
    { "name": "BUDECORT RESP 0.5", "qty": 2.0, "mrp": 26.46, "exp": "30/04/27", "batch": "SN30610" },
    { "name": "C-Lysin Gold Tab", "qty": 3.009, "mrp": 77.0, "exp": "28/02/27", "batch": "0869" },
    { "name": "Cabliz 0.5", "qty": 1.0, "mrp": 268.0, "exp": "30/04/27", "batch": "25S2GTB288" },
    { "name": "CACEFEN - P", "qty": 46.006, "mrp": 56.5, "exp": "31/05/27", "batch": "D251455A" },
    { "name": "Califer-XT tab", "qty": 5.0, "mrp": 205.0, "exp": "31/08/27", "batch": "FHT-1971" },
    { "name": "CALPOL DROPS", "qty": 2.0, "mrp": 33.05, "exp": "31/08/27", "batch": "NA457" },
    { "name": "CALZICA SUS", "qty": 8.0, "mrp": 155.56, "exp": "31/08/25", "batch": "SVL-C0213" },
    { "name": "CAMYDA 300", "qty": 10.0, "mrp": 297.8, "exp": "31/03/27", "batch": "CZLO11E" },
    { "name": "CANDIBIOTIC EAR DROUP", "qty": 2.0, "mrp": 106.0, "exp": "30/11/26", "batch": "N25CP021" },
    { "name": "CANDID B CREAM", "qty": 8.0, "mrp": 182.0, "exp": "28/02/27", "batch": "11250347" },
    { "name": "CANDID M/PAINT", "qty": 3.0, "mrp": 189.5, "exp": "29/02/28", "batch": "11250324" },
    { "name": "CANDID POWDER  60 GM", "qty": 0.0, "mrp": 104.0, "exp": "31/05/28", "batch": "71240170" },
    { "name": "CANDID POWDER 120 GM", "qty": 0.0, "mrp": 174.0, "exp": "31/03/28", "batch": "71250175" },
    { "name": "CARBA PLUS", "qty": 3.0, "mrp": 50.0, "exp": "31/05/25", "batch": "PRT2201" },
    { "name": "Cefoblaze O tab", "qty": 12.0, "mrp": 129.0, "exp": "31/12/26", "batch": "DMF04AAA" },
    { "name": "CEFOLAC O 200MG", "qty": 4.0, "mrp": 232.3, "exp": "31/03/27", "batch": "18251514B" },
    { "name": "CEFOPAN O TAB", "qty": 26.002, "mrp": 219.61, "exp": "28/02/27", "batch": "BFU03AAA" },
    { "name": "cefuross 250", "qty": 6.0, "mrp": 250.0, "exp": "31/03/27", "batch": "CEX25002D" },
    { "name": "Cefuross-125 tab", "qty": 3.0, "mrp": 168.0, "exp": "31/03/27", "batch": "CXD25001A" },
    { "name": "Cefuswag - CV 500", "qty": 8.0, "mrp": 690.0, "exp": "31/03/27", "batch": "CACC5004E" },
    { "name": "Cepoday-cv 325", "qty": 3.0, "mrp": 319.5, "exp": "30/11/26", "batch": "T250291C" },
    { "name": "CETIL DRY  SURP", "qty": 1.0, "mrp": 354.8, "exp": "31/05/25", "batch": "CD23487" },
    { "name": "CETZINE 10MG", "qty": 7.003, "mrp": 31.5, "exp": "30/09/27", "batch": "EMV242067" },
    { "name": "Cintagest drops", "qty": 1.0, "mrp": 85.0, "exp": "31/08/26", "batch": "72001122WJ" },
    { "name": "CITAPURE FORTE", "qty": 34.0, "mrp": 96.54, "exp": "31/01/28", "batch": "P-9640" },
    { "name": "CLAVAM 625", "qty": 2.006, "mrp": 195.47, "exp": "30/04/27", "batch": "25444413" },
    { "name": "CLAVAM DROP", "qty": 2.0, "mrp": 121.0, "exp": "30/09/26", "batch": "24443764" },
    { "name": "CLAVAM FORTE DRY SYRUP", "qty": 1.0, "mrp": 178.0, "exp": "31/05/26", "batch": "24444518" },
    { "name": "CLID VL", "qty": 1.0, "mrp": 159.5, "exp": "31/01/27", "batch": "BPLT-25045" },
    { "name": "CLONAX MD-0.5", "qty": 0.0, "mrp": 39.31, "exp": "31/05/28", "batch": "P-9747" },
    { "name": "CO2", "qty": 1.0, "mrp": 223.0, "exp": "31/03/27", "batch": "B50068" },
    { "name": "COLIMEX DROP", "qty": 2.0, "mrp": 97.8, "exp": "31/12/27", "batch": "CRR001F" },
    { "name": "COLIMEX SUSPENSION", "qty": 0.0, "mrp": 73.6, "exp": "31/05/28", "batch": "COR009F" },
    { "name": "COLIMEX TAB", "qty": 0.0, "mrp": 47.0, "exp": "31/03/28", "batch": "CXR031F" },
    { "name": "CONFIDO TAB", "qty": 2.0, "mrp": 205.0, "exp": "30/04/27", "batch": "111240540" },
    { "name": "CONSTINA POWDER", "qty": 8.0, "mrp": 159.38, "exp": "30/09/26", "batch": "CN-098" },
    { "name": "CORIMINIC drop", "qty": 3.0, "mrp": 96.55, "exp": "30/04/27", "batch": "NCO50502" },
    { "name": "CORIMINIC- SYP", "qty": 5.0, "mrp": 97.45, "exp": "31/08/25", "batch": "VCB30903" },
    { "name": "CORN CAP", "qty": 1.0, "mrp": 30.0, "exp": "30/06/25", "batch": "A54610037" },
    { "name": "COTTON 250GM", "qty": 1.0, "mrp": 72.0, "exp": "31/10/25", "batch": "48D" },
    { "name": "COTTON 25GM", "qty": 17.0, "mrp": 25.0, "exp": "31/05/25", "batch": "30" },
    { "name": "COTTON 500G", "qty": 2.0, "mrp": 170.0, "exp": "31/05/25", "batch": "30" },
    { "name": "COVATIL CV 500", "qty": 2.0, "mrp": 942.55, "exp": "31/03/27", "batch": "18251157B" },
    { "name": "CREPE KING6INCH", "qty": 10.0, "mrp": 192.0, "exp": "31/03/26", "batch": "58" },
    { "name": "CURASIDE-ET", "qty": 1.0, "mrp": 195.0, "exp": "30/06/25", "batch": "ST23-1970" },
    { "name": "Cyclovarin cap", "qty": 2.0, "mrp": 290.0, "exp": "31/07/26", "batch": "3036" },
    { "name": "Cystone Forte     TAB", "qty": 1.0, "mrp": 155.0, "exp": "31/03/27", "batch": "722500095" },
    { "name": "CYSTONE TAB", "qty": 0.0, "mrp": 260.0, "exp": "30/04/28", "batch": "106250573" },
    { "name": "D-PROTIN POWDER", "qty": 1.0, "mrp": 630.0, "exp": "31/05/26", "batch": "DP2401" },
    { "name": "D3 SHOT", "qty": 25.0, "mrp": 38.0, "exp": "31/03/27", "batch": "P-9812" },
    { "name": "D3-MUST", "qty": 20.0, "mrp": 115.0, "exp": "31/12/26", "batch": "DM-2401" },
    { "name": "D3 MUST DROUP", "qty": 14.0, "mrp": 115.0, "exp": "30/04/26", "batch": "T24D112" },
    { "name": "DALACIN C 300", "qty": 2.0, "mrp": 344.0, "exp": "31/03/27", "batch": "DC-2402" },
    { "name": "DAZIT 5MG", "qty": 5.0, "mrp": 102.0, "exp": "30/06/27", "batch": "DZ-2403" },
    { "name": "DEC PED SYP", "qty": 6.0, "mrp": 49.4, "exp": "31/12/26", "batch": "DP-2404" },
    { "name": "DEC-FORTE TAB", "qty": 18.0, "mrp": 132.0, "exp": "31/03/27", "batch": "DF-2404" },
    { "name": "DEFCORT 6 TAB", "qty": 1.0, "mrp": 115.0, "exp": "31/03/27", "batch": "DC-2405" },
    { "name": "DEXONA INJ", "qty": 1.0, "mrp": 12.5, "exp": "31/03/26", "batch": "DX-2406" },
    { "name": "DFO 4x Gel", "qty": 4.0, "mrp": 180.0, "exp": "31/03/27", "batch": "DF-2407" },
    { "name": "DIAPER ADULT (M)", "qty": 1.0, "mrp": 450.0, "exp": "31/03/27", "batch": "DA-2408" },
    { "name": "Dideral Plus tab", "qty": 5.0, "mrp": 125.0, "exp": "31/03/27", "batch": "DP-2408" },
    { "name": "Docorite cap.", "qty": 6.0, "mrp": 185.0, "exp": "31/03/27", "batch": "DR-2409" },
    { "name": "DOLO 250 SYP", "qty": 1.0, "mrp": 45.0, "exp": "31/03/27", "batch": "DL-2409" },
    { "name": "DOLO 650 TAB", "qty": 20.933, "mrp": 31.0, "exp": "31/03/27", "batch": "DL-2410" },
    { "name": "DOM DT 10", "qty": 30.0, "mrp": 25.0, "exp": "30/09/27", "batch": "DT-2411" },
    { "name": "DOXOKOT M TAB", "qty": 6.9, "mrp": 92.0, "exp": "31/03/27", "batch": "DK-2412" },
    { "name": "Doxyrax OD tab", "qty": 9.0, "mrp": 110.0, "exp": "31/03/27", "batch": "DX-2413" },
    { "name": "DULCOFLEX TAB", "qty": 4.8, "mrp": 15.0, "exp": "31/03/27", "batch": "DF-2414" },
    { "name": "DUOLIN RESP", "qty": 20.0, "mrp": 12.0, "exp": "31/03/27", "batch": "DR-2415" },
    { "name": "ECONORM SACHET", "qty": 10.0, "mrp": 48.0, "exp": "31/03/27", "batch": "EC-2416" },
    { "name": "ELDERVIT 12 INJ", "qty": 2.0, "mrp": 105.0, "exp": "31/03/27", "batch": "EV-2417" },
    { "name": "ELDOPER CAP", "qty": 40.0, "mrp": 35.0, "exp": "30/06/27", "batch": "EP-2418" },
    { "name": "Enterogermina", "qty": 8.0, "mrp": 60.0, "exp": "31/03/27", "batch": "EG-2424" },
    { "name": "ENTEROQUINOL TAB", "qty": 2.0, "mrp": 62.0, "exp": "31/03/27", "batch": "EQ-2419" },
    { "name": "ERZL Orange Drink", "qty": 77.0, "mrp": 45.0, "exp": "31/03/27", "batch": "EZ-2420" },
    { "name": "ESIRADO RD CAP", "qty": 1.4, "mrp": 145.0, "exp": "31/03/27", "batch": "ER-2421" },
    { "name": "Esirado RD 15 Capsul", "qty": 114.0, "mrp": 200.0, "exp": "31/03/27", "batch": "ER-2425" },
    { "name": "ESOKOT D CAP", "qty": 23.5, "mrp": 165.0, "exp": "31/03/27", "batch": "ED-2422" },
    { "name": "Esokot - L", "qty": 17.0, "mrp": 155.0, "exp": "31/03/27", "batch": "ES-2426" },
    { "name": "Espeedo- SP", "qty": 20.0, "mrp": 135.0, "exp": "31/03/27", "batch": "EP-2427" },
    { "name": "EVECARE FORTE LIQUID", "qty": 7.0, "mrp": 210.0, "exp": "31/03/27", "batch": "EF-2423" },
    { "name": "EVION 400", "qty": 50.0, "mrp": 42.0, "exp": "31/12/27", "batch": "EV-2424" },
    { "name": "Exacyl 500 Tab", "qty": 12.0, "mrp": 245.0, "exp": "31/03/27", "batch": "EX-2425" },
    { "name": "Farofence CV", "qty": 17.0, "mrp": 540.0, "exp": "31/03/27", "batch": "FF-2426" },
    { "name": "Farozius-200", "qty": 3.0, "mrp": 490.0, "exp": "31/03/27", "batch": "FZ-2427" },
    { "name": "Fe Daily Tab", "qty": 9.0, "mrp": 280.0, "exp": "31/03/27", "batch": "FD-2428" },
    { "name": "FEMCLAVE LB 625 TAB", "qty": 36.0, "mrp": 185.0, "exp": "31/03/27", "batch": "FL-2429" },
    { "name": "FLAGYL 400", "qty": 45.0, "mrp": 28.0, "exp": "31/08/27", "batch": "FG-2430" },
    { "name": "FLORASANTE CAP", "qty": 1.0, "mrp": 260.0, "exp": "31/03/27", "batch": "FS-2431" },
    { "name": "FLUUKA 150", "qty": 15.0, "mrp": 14.5, "exp": "31/05/27", "batch": "FK-2432" },
    { "name": "FOLVITE TAB", "qty": 30.0, "mrp": 82.0, "exp": "31/01/28", "batch": "FV-2433" },
    { "name": "FOLYS CATHETAR 24", "qty": 20.0, "mrp": 120.0, "exp": "31/03/27", "batch": "FC-2432" },
    { "name": "GELUSIL MPS LIQ", "qty": 3.0, "mrp": 135.0, "exp": "31/07/27", "batch": "GS-2434" },
    { "name": "GERMIRICH-ZYME CAP", "qty": 6.0, "mrp": 145.0, "exp": "31/03/27", "batch": "GZ-2434" },
    { "name": "GAUZE", "qty": 3.0, "mrp": 85.0, "exp": "31/03/27", "batch": "GZ-2433" },
    { "name": "Glexim CV 325", "qty": 3.0, "mrp": 310.0, "exp": "31/03/27", "batch": "GX-2435" },
    { "name": "GLIMY M 2", "qty": 25.0, "mrp": 115.0, "exp": "31/12/27", "batch": "GM-2436" },
    { "name": "GLOVES 7 NO", "qty": 12.0, "mrp": 35.0, "exp": "31/03/27", "batch": "GV-2435" },
    { "name": "GLUCON-D 500G", "qty": 5.0, "mrp": 190.0, "exp": "30/06/27", "batch": "GD-2437" },
    { "name": "Growly Syrup", "qty": 10.0, "mrp": 145.0, "exp": "31/03/27", "batch": "GY-2438" },
    { "name": "GUFICOX 450", "qty": 12.0, "mrp": 110.0, "exp": "31/03/27", "batch": "GC-2439" },
    { "name": "HIFENAC P", "qty": 30.0, "mrp": 92.0, "exp": "31/10/27", "batch": "HP-2440" },
    { "name": "HISTAFREE 120", "qty": 15.0, "mrp": 165.0, "exp": "31/03/27", "batch": "HF-2441" },
    { "name": "HOTFLAM - P", "qty": 69.2, "mrp": 35.0, "exp": "31/03/27", "batch": "HP-2438" },
    { "name": "HOTFLAM - SP TAB", "qty": 16.3, "mrp": 110.0, "exp": "31/03/27", "batch": "HS-2439" },
    { "name": "HUGGIES (M) 28 PANTS", "qty": 20.0, "mrp": 450.0, "exp": "31/03/27", "batch": "HG-2440" },
    { "name": "HUGGIES (M) 38 PANTS", "qty": 20.0, "mrp": 580.0, "exp": "31/03/27", "batch": "HG-2441" },
    { "name": "HUGGIES (M) 5 PANT", "qty": 19.0, "mrp": 95.0, "exp": "31/03/27", "batch": "HG-2442" },
    { "name": "HUGGIES (M) 8 PANTS", "qty": 48.0, "mrp": 145.0, "exp": "31/03/27", "batch": "HG-2443" },
    { "name": "HUMALOG 100IU", "qty": 2.0, "mrp": 640.0, "exp": "30/09/26", "batch": "HL-2442" },
    { "name": "InnoVAL Gel", "qty": 3.0, "mrp": 320.0, "exp": "31/03/27", "batch": "IV-2443" },
    { "name": "INTRAFIX AIR", "qty": 24.0, "mrp": 45.0, "exp": "31/03/27", "batch": "IF-2447" },
    { "name": "IT Mac 200", "qty": 2.0, "mrp": 215.0, "exp": "31/03/27", "batch": "IT-2444" },
    { "name": "ITRAMEGH 200MG", "qty": 3.0, "mrp": 195.0, "exp": "31/03/27", "batch": "IM-2445" },
    { "name": "IXOVIT 9G S/G", "qty": 6.0, "mrp": 240.0, "exp": "31/03/27", "batch": "IX-2446" },
    { "name": "K-Lyte-P", "qty": 1.0, "mrp": 85.0, "exp": "31/03/27", "batch": "KL-2448" },
    { "name": "K-WIN 10 AMP", "qty": 5.0, "mrp": 75.0, "exp": "31/03/27", "batch": "KW-2449" },
    { "name": "KENACORT 40MG/ML", "qty": 1.0, "mrp": 161.23, "exp": "31/03/26", "batch": "824-216" },
    { "name": "KITKATH 22", "qty": 11.0, "mrp": 65.0, "exp": "31/03/27", "batch": "KK-2451" },
    { "name": "KITKATH 24", "qty": 17.0, "mrp": 65.0, "exp": "31/03/27", "batch": "KK-2452" },
    { "name": "KLARIM-250 DRY SYP", "qty": 5.0, "mrp": 210.0, "exp": "31/03/27", "batch": "KM-2450" },
    { "name": "KLICK CLAMP", "qty": 89.0, "mrp": 25.0, "exp": "31/03/27", "batch": "KC-2453" },
    { "name": "L-301 CAP", "qty": 4.0, "mrp": 110.0, "exp": "31/03/27", "batch": "LC-2459" },
    { "name": "LACTISYN SACHET", "qty": 15.0, "mrp": 65.0, "exp": "31/03/27", "batch": "LS-2454" },
    { "name": "LACTOGEN 1 400GM", "qty": 2.0, "mrp": 480.0, "exp": "31/03/27", "batch": "LG-2455" },
    { "name": "LACTOGEN 1 200G", "qty": 8.0, "mrp": 250.0, "exp": "31/03/27", "batch": "LG-2456" },
    { "name": "Lactobex-PPB cap", "qty": 0.6, "mrp": 125.0, "exp": "31/03/27", "batch": "LB-2460" },
    { "name": "LAXARIZ SYP", "qty": 22.0, "mrp": 155.0, "exp": "31/03/27", "batch": "LZ-2457" },
    { "name": "Leixo-fem tab", "qty": 8.0, "mrp": 310.0, "exp": "31/03/27", "batch": "LF-2461" },
    { "name": "LIMCEE 500MG", "qty": 9.4, "mrp": 25.0, "exp": "31/03/27", "batch": "LC-2463" },
    { "name": "LIZOMAC 600MG", "qty": 2.0, "mrp": 380.0, "exp": "31/03/27", "batch": "LM-2458" },
    { "name": "Lyziton Kid syp", "qty": 3.0, "mrp": 125.0, "exp": "31/03/27", "batch": "LK-2462" },
    { "name": "MAMY POKO PANTS 1 P", "qty": 8.0, "mrp": 25.0, "exp": "31/03/27", "batch": "MP-2472" },
    { "name": "MAMYPOKO PANTS (M) 2", "qty": 4.0, "mrp": 55.0, "exp": "31/03/27", "batch": "MP-2473" },
    { "name": "MECONERV - Z SYP", "qty": 12.0, "mrp": 196.97, "exp": "01/03/26", "batch": "824-215" },
    { "name": "medifin gauze", "qty": 1.0, "mrp": 200.0, "exp": "31/03/27", "batch": "MG-2475" },
    { "name": "Megapot-MB6", "qty": 10.0, "mrp": 165.0, "exp": "31/03/27", "batch": "MM-2469" },
    { "name": "MICROPORE", "qty": 3.0, "mrp": 45.0, "exp": "31/03/27", "batch": "MC-2474" },
    { "name": "Migrant-500", "qty": 7.0, "mrp": 98.0, "exp": "31/03/27", "batch": "MG-2470" },
    { "name": "migravas 10mg", "qty": 6.0, "mrp": 65.0, "exp": "31/03/27", "batch": "MV-2476" },
    { "name": "MIGRAVAS P", "qty": 21.9, "mrp": 145.0, "exp": "31/03/27", "batch": "MP-2464" },
    { "name": "MIRABET-S-25 TAB", "qty": 1.0, "mrp": 340.0, "exp": "31/03/27", "batch": "MS-2465" },
    { "name": "MIRABET-S-50 TAB", "qty": 3.0, "mrp": 480.0, "exp": "31/03/27", "batch": "MS-2466" },
    { "name": "MONTORIL TAB", "qty": 16.0, "mrp": 115.0, "exp": "31/03/27", "batch": "MT-2467" },
    { "name": "MORTEGA TAB", "qty": 5.0, "mrp": 420.0, "exp": "31/03/27", "batch": "MG-2468" },
    { "name": "Multizavit Cap", "qty": 11.0, "mrp": 195.0, "exp": "31/03/27", "batch": "MZ-2471" },
    { "name": "N T GAS TABLET", "qty": 5.2, "mrp": 95.0, "exp": "31/03/27", "batch": "NT-2477" },
    { "name": "NAVIGEN-AP", "qty": 10.0, "mrp": 185.0, "exp": "31/03/27", "batch": "NA-2478" },
    { "name": "NERVORANT 5G CREAM", "qty": 10.0, "mrp": 190.0, "exp": "31/03/27", "batch": "NV-2479" },
    { "name": "NIDAZAP 500ML", "qty": 2.0, "mrp": 85.0, "exp": "31/03/27", "batch": "NZ-2480" },
    { "name": "NIPPEL", "qty": 17.0, "mrp": 45.0, "exp": "31/03/27", "batch": "NP-2481" },
    { "name": "NORMALIZATION MASK", "qty": 1.0, "mrp": 25.0, "exp": "31/03/27", "batch": "NM-2482" },
    { "name": "nuvitical 60K tab", "qty": 4.0, "mrp": 125.0, "exp": "31/03/27", "batch": "NT-2483" },
    { "name": "OSRACAL D3 NANO", "qty": 18.0, "mrp": 245.0, "exp": "31/03/27", "batch": "OC-2484" },
    { "name": "Pacimol MF 125ml", "qty": 4.0, "mrp": 48.0, "exp": "31/03/27", "batch": "PM-2486" },
    { "name": "pharmazin MD-5", "qty": 12.0, "mrp": 65.0, "exp": "31/03/27", "batch": "PZ-2490" },
    { "name": "Poviquin", "qty": 4.0, "mrp": 45.0, "exp": "31/03/27", "batch": "PQ-2487" },
    { "name": "Pregazot NT", "qty": 4.0, "mrp": 220.0, "exp": "31/03/27", "batch": "PZ-2488" },
    { "name": "Prostalyn Cap", "qty": 8.0, "mrp": 210.0, "exp": "31/03/27", "batch": "PL-2489" },
    { "name": "PRULINK 2 TAB", "qty": 8.0, "mrp": 210.0, "exp": "31/03/27", "batch": "PL-2485" },
    { "name": "RABEMAC -DSR 15 t", "qty": 7.06, "mrp": 165.0, "exp": "31/03/27", "batch": "RM-2491" },
    { "name": "RAXOFLAM TP", "qty": 19.2, "mrp": 145.0, "exp": "31/03/27", "batch": "RF-2492" },
    { "name": "REJULIV PLUS SYP", "qty": 2.0, "mrp": 280.0, "exp": "31/03/27", "batch": "RJ-2493" },
    { "name": "RIKVIT-HD", "qty": 35.0, "mrp": 65.0, "exp": "31/03/27", "batch": "RV-2494" },
    { "name": "Rucam 400", "qty": 3.0, "mrp": 410.0, "exp": "31/03/27", "batch": "RC-2495" },
    { "name": "safcold tab", "qty": 31.6, "mrp": 65.0, "exp": "31/03/27", "batch": "ST-2512" },
    { "name": "saltum kid 250", "qty": 5.0, "mrp": 319.4, "exp": "31/08/26", "batch": "TB240193" },
    { "name": "SALTUM -DS", "qty": 30.0, "mrp": 645.88, "exp": "30/04/27", "batch": "TSMB5007" },
    { "name": "SALTUM 375", "qty": 10.0, "mrp": 592.97, "exp": "31/03/27", "batch": "TSMA5018" },
    { "name": "SALTUM INJ 1.5GM", "qty": 80.0, "mrp": 158.5, "exp": "30/11/27", "batch": "G592507A" },
    { "name": "SARIDON TAB", "qty": 3.1, "mrp": 45.0, "exp": "31/03/27", "batch": "SR-2533" },
    { "name": "SATMINE OINT 10GM", "qty": 13.0, "mrp": 195.0, "exp": "31/03/27", "batch": "SM-2496" },
    { "name": "SEPROLIV SYP", "qty": 9.0, "mrp": 145.0, "exp": "31/03/27", "batch": "SP-2497" },
    { "name": "SEPTILOC ONITMENT", "qty": 2.0, "mrp": 110.0, "exp": "31/03/27", "batch": "SL-2498" },
    { "name": "SILICON CATHETER 16", "qty": 2.0, "mrp": 185.0, "exp": "31/03/27", "batch": "SC-2499" },
    { "name": "SILICON CHATHER 14 N", "qty": 3.0, "mrp": 185.0, "exp": "31/03/27", "batch": "SC-2500" },
    { "name": "SLEEPOLAX SPRAY", "qty": 6.0, "mrp": 450.0, "exp": "31/03/27", "batch": "SS-2501" },
    { "name": "SOFY PAD MRP 32", "qty": 5.0, "mrp": 32.0, "exp": "31/03/27", "batch": "SF-2502" },
    { "name": "SP- CAL Plus cap", "qty": 3.0, "mrp": 125.0, "exp": "31/03/27", "batch": "SC-2503" },
    { "name": "SPARK SYP", "qty": 9.0, "mrp": 250.0, "exp": "31/03/27", "batch": "SS-2504" },
    { "name": "STAYFREE regular mrp", "qty": 16.0, "mrp": 0.0, "exp": "01/01/26", "batch": "SF02" },
    { "name": "STAYFREE XL MRP 40", "qty": 25.0, "mrp": 40.0, "exp": "31/03/27", "batch": "SF-2532" },
    { "name": "STEMETIL MD", "qty": 1.33, "mrp": 155.0, "exp": "31/03/27", "batch": "SM-2534" },
    { "name": "STERIPORE TAP", "qty": 9.0, "mrp": 45.0, "exp": "31/03/27", "batch": "ST-2505" },
    { "name": "Sucraford-O sup", "qty": 9.0, "mrp": 195.0, "exp": "31/03/27", "batch": "SF-2510" },
    { "name": "SUPERJOINT-GM TAB", "qty": 7.5, "mrp": 230.0, "exp": "31/03/27", "batch": "SJ-2506" },
    { "name": "SV SET 20 NO.", "qty": 5.0, "mrp": 25.0, "exp": "31/03/27", "batch": "SV-2507" },
    { "name": "SV SET 22 NO.", "qty": 26.0, "mrp": 25.0, "exp": "31/03/27", "batch": "SV-2508" },
    { "name": "Systoliv syp", "qty": 8.0, "mrp": 115.0, "exp": "31/03/27", "batch": "SY-2511" },
    { "name": "THROMBOPHOB OINT", "qty": 2.0, "mrp": 185.0, "exp": "31/03/27", "batch": "TP-2537" },
    { "name": "THROMBOTROY QPS SPRA", "qty": 1.0, "mrp": 195.0, "exp": "31/03/27", "batch": "TT-2514" },
    { "name": "TINIBA 500ML", "qty": 1.0, "mrp": 85.0, "exp": "31/03/27", "batch": "TN-2535" },
    { "name": "TINIBA INFU", "qty": 8.0, "mrp": 0.0, "exp": "01/03/26", "batch": "824-220" },
    { "name": "TINZIT", "qty": 1.0, "mrp": 310.0, "exp": "31/03/27", "batch": "TZ-2515" },
    { "name": "TRAMAZAC 100MG AMP", "qty": 44.0, "mrp": 25.0, "exp": "31/03/27", "batch": "TZ-2536" },
    { "name": "TUSSBERRY LS DROP", "qty": 5.0, "mrp": 75.0, "exp": "31/03/27", "batch": "TB-2516" },
    { "name": "UBEGOLD", "qty": 4.0, "mrp": 295.0, "exp": "31/03/27", "batch": "UG-2517" },
    { "name": "UDILINK 300 MG TAB", "qty": 17.0, "mrp": 540.0, "exp": "31/03/27", "batch": "UL-2518" },
    { "name": "UGBACT 500", "qty": 17.0, "mrp": 530.0, "exp": "31/03/27", "batch": "UB-2519" },
    { "name": "Ulpan Gel syp", "qty": 24.0, "mrp": 195.0, "exp": "31/03/27", "batch": "UG-2524" },
    { "name": "UPCID - O DS SYP", "qty": 34.0, "mrp": 245.0, "exp": "31/03/27", "batch": "UC-2520" },
    { "name": "UPCID-DSR TAB", "qty": 28.0, "mrp": 125.0, "exp": "31/03/27", "batch": "UD-2521" },
    { "name": "URIPOT MB6", "qty": 7.0, "mrp": 195.0, "exp": "31/03/27", "batch": "UP-2522" },
    { "name": "URISOFT CAP", "qty": 9.0, "mrp": 240.0, "exp": "31/03/27", "batch": "US-2523" },
    { "name": "Vitkul - EC tab", "qty": 10.0, "mrp": 110.0, "exp": "31/03/27", "batch": "VK-2525" },
    { "name": "Vonolink 20 tab", "qty": 17.0, "mrp": 145.0, "exp": "31/03/27", "batch": "VL-2526" },
    { "name": "Weekzot - D3", "qty": 1.0, "mrp": 125.0, "exp": "31/03/27", "batch": "WZ-2527" },
    { "name": "XERODERM OTC CREAM", "qty": 3.0, "mrp": 155.0, "exp": "31/03/27", "batch": "XD-2528" },
    { "name": "xerolac cap", "qty": 5.0, "mrp": 185.0, "exp": "31/03/27", "batch": "XL-2530" },
    { "name": "XOXE  CV  500", "qty": 11.0, "mrp": 657.05, "exp": "30/04/27", "batch": "COXE6004" },
    { "name": "XOXE 500", "qty": 1.0, "mrp": 576.02, "exp": "31/01/26", "batch": "C1174006" },
    { "name": "XT LIV  SYP", "qty": 19.0, "mrp": 295.56, "exp": "31/05/27", "batch": "SVL-25080" },
    { "name": "XTRIL  100ML", "qty": 22.0, "mrp": 108.89, "exp": "30/06/26", "batch": "SVL-24117" },
    { "name": "Xtril Kid Syrup", "qty": 2.0, "mrp": 95.0, "exp": "31/03/27", "batch": "XT-2491" },
    { "name": "ZENTEL 400MG", "qty": 4.0, "mrp": 9.09, "exp": "31/12/27", "batch": "A210" },
    { "name": "ZENTRYP-D", "qty": 4.0, "mrp": 192.0, "exp": "30/09/25", "batch": "ZEN230096" },
    { "name": "ZERODOL P TAB", "qty": 9.009, "mrp": 81.0, "exp": "30/09/27", "batch": "KVB0325138A0" },
    { "name": "ZERODOL-SP", "qty": 9.009, "mrp": 149.04, "exp": "31/01/28", "batch": "FND0725075BH" },
    { "name": "ZIG ZIG COTTON", "qty": 10.0, "mrp": 45.0, "exp": "01/01/26", "batch": "ZZ01" },
    { "name": "ZIKEM 500 TAB", "qty": 79.0, "mrp": 79.0, "exp": "31/03/27", "batch": "SDT25031D" },
    { "name": "zikem-200 susp", "qty": 8.0, "mrp": 115.0, "exp": "31/03/27", "batch": "ZK-2531" },
    { "name": "ZONAMAX ES 1.5gm", "qty": 20.0, "mrp": 275.62, "exp": "31/10/27", "batch": "18254517A" }
];

// Browser memory logic
let medicines = JSON.parse(localStorage.getItem('jmd_inventory')) || initialMedicines;
let cart = [];
let isShowingAll = false;

function syncStorage() { localStorage.setItem('jmd_inventory', JSON.stringify(medicines)); }

function updateClock() {
    const clockEl = document.getElementById('live-clock');
    if (clockEl) clockEl.innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);

// --- DISPLAY LOGIC ---
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
        list.innerHTML = "<p style='text-align:center; padding:20px; color:#888;'>Cart khali hai...</p>";
        return;
    }
    list.innerHTML = "";
    cart.forEach((item, i) => {
        list.innerHTML += `<div style="padding:10px 0; border-bottom:1px solid #eee">
            <b>${item.name}</b><br>Qty: ${item.orderedQty}
            <button onclick="removeItem(${i})" style="color:red; border:none; background:none; cursor:pointer; float:right">Remove</button>
        </div>`;
    });
}

function sendWhatsAppOrder() {
    if(cart.length === 0) return alert("Pehle items chuniye!");
    saveToHistory(cart);
    cart.forEach(cartItem => {
        const targetMed = medicines.find(m => m.name === cartItem.name);
        if(targetMed) targetMed.qty = parseFloat((targetMed.qty - cartItem.orderedQty).toFixed(2));
    });
    syncStorage();
    let text = "📦 *NEW ORDER - JMD MEDICAL*%0A--------------------------%0A";
    cart.forEach((item, index) => { text += `${index + 1}. *${item.name}* (Qty: ${item.orderedQty})%0A`; });
    window.open(`https://wa.me/${myWhatsAppNumber}?text=${text}`, '_blank');
    cart = []; updateCartUI(); displayMeds(medicines);
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
    list.innerHTML = history.length ? history.map(h => `<div style="border-bottom:1px solid #eee; padding:10px 0;"><small>${h.date}</small><p>${h.items.map(i => i.name).join(", ")}</p></div>`).join("") : "<p>No history.</p>";
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

function openAdmin() {
    document.getElementById('adminModal').style.display = 'flex';
    document.getElementById('adminAuth').style.display = 'block';
    document.getElementById('adminControls').style.display = 'none';
    document.getElementById('adminUser').value = "";
    document.getElementById('adminPass').value = "";
}

function closeAdmin() { document.getElementById('adminModal').style.display = 'none'; }

function loginAdmin() {
    const u = document.getElementById('adminUser').value;
    const p = document.getElementById('adminPass').value;
    if (u === adminID && p === adminPass) {
        document.getElementById('adminAuth').style.display = 'none';
        document.getElementById('adminControls').style.display = 'block';
        const select = document.getElementById('medSelect');
        select.innerHTML = medicines.map((m, i) => `<option value="${i}">${m.name} (Stock: ${m.qty})</option>`).join("");
    } else { alert("ID/Pass Galat!"); }
}

function updateStockNow() {
    const idx = document.getElementById('medSelect').value;
    const addQty = parseFloat(document.getElementById('newStockQty').value);
    if(!isNaN(addQty)) {
        const currentQty = parseFloat(medicines[idx].qty);
        medicines[idx].qty = parseFloat((currentQty + addQty).toFixed(2));
        syncStorage(); displayMeds(medicines);
        alert(`${medicines[idx].name} Updated!`);
        loginAdmin(); 
        document.getElementById('newStockQty').value = "";
    }
}

function resetAllStock() {
    if(confirm("Factory Reset? Sabhi data update ho jayega.")) {
        localStorage.removeItem('jmd_inventory'); location.reload();
    }
}

window.onload = () => { displayMeds(medicines); updateClock(); };
