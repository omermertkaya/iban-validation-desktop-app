function findIbanBankCode(value){
    var allBankCode = [
        {bankCode : '0001', bankName : "T.C. MERKEZ BANKASI"},
        {bankCode : '0004', bankName : "İLLER BANKASI A.Ş"},
        {bankCode : '00010', bankName : "T.C.ZİRAAT BANKASI A.Ş"},
        {bankCode : '00012', bankName : "T. HALK BANKASI A.Ş"},
        {bankCode : '00014', bankName : "T. SINAİ KALKINMA BANKASI A.Ş"},
        {bankCode : '00015', bankName : "T. VAKIFLAR BANKASI T.A.O"},
        {bankCode : '00016', bankName : "T. EXİMBANK"},
        {bankCode : '00017', bankName : "T. KALKINMA BANKASI A.Ş."},
        {bankCode : '00029', bankName : "BİRLEŞİK FON BANKASI A.Ş"},
        {bankCode : '00032', bankName : "T. EKONOMİ BANKASI A.Ş"},
        {bankCode : '00046', bankName : "AKBANK T.A.Ş"},
        {bankCode : '00059', bankName : "ŞEKERBANK T.A.Ş"},
        {bankCode : '00062', bankName : "T. GARANTİ BANKASI A.Ş."},
        {bankCode : '00064', bankName : "T. İŞ BANKASI A.Ş. "},
        {bankCode : '00067', bankName : "YAPI VE KREDİ BANKASI A.Ş."},
        {bankCode : '00091', bankName : "ARAP TÜRK BANKASI"},
        {bankCode : '00092', bankName : "CITIBANK A.Ş."},
        {bankCode : '00096', bankName : "TURKISH BANK A.Ş."},
        {bankCode : '00098', bankName : "JPMORGAN CHASE BANK N.A"},
        {bankCode : '00099', bankName : "ING BANK A.Ş"},
        {bankCode : '00100', bankName : "ADABANK A.Ş. "},
        {bankCode : '00103', bankName : "FİBABANKA A.Ş."},
        {bankCode : '00108', bankName : "TURKLAND BANK A.S"},
        {bankCode : '00109', bankName : "ICBC TURKEY BANK A.Ş"},
        {bankCode : '00111', bankName : "QNB FİNANSBANK A.Ş. "},
        {bankCode : '00115', bankName : "DEUTSCHE BANK A.Ş"},
        {bankCode : '00116', bankName : "PASHA YATIRIM BANK A.Ş."},
        {bankCode : '00121', bankName : "STANDARD CHARTERED YATIRIM BANKASI TÜRK A.Ş."},
        {bankCode : '00122', bankName : "SOCIETE GENERALE (SA)"},
        {bankCode : '00123', bankName : "HSBC BANK A.Ş."},
        {bankCode : '00124', bankName : "ALTERNATİFBANK A.Ş."},
        {bankCode : '00125', bankName : "BURGAN BANK A.Ş."},
        {bankCode : '00129', bankName : "MERRILL LYNCH YATIRIM BANK A.Ş."},
        {bankCode : '00132', bankName : "İSTANBUL TAKAS VE SAKLAMA BANK. A.Ş."},
        {bankCode : '00134', bankName : "DENİZBANK A.Ş."},
        {bankCode : '00135', bankName : "ANADOLUBANK A.Ş."},
        {bankCode : '00137', bankName : "RABOBANK A.Ş."},
        {bankCode : '00138', bankName : "DİLER YATIRIM BANKASI A.Ş."},
        {bankCode : '00139', bankName : "GSD YATIRIM BANKASI A.Ş. "},
        {bankCode : '00141', bankName : "NUROL YATIRIM BANKASI A.Ş."},
        {bankCode : '00142', bankName : "BANKPOZİTİF KREDİ VE KALK.BANK.A.Ş."},
        {bankCode : '00143', bankName : "AKTİF YATIRIM BANKASI A.Ş."},
        {bankCode : '00146', bankName : "ODEA BANK A.Ş."},
        {bankCode : '00147', bankName : "MUFG BANK TURKEY A.Ş."},
        {bankCode : '00148', bankName : "INTESA SANPAOLO S.P.A."},
        {bankCode : '00149', bankName : "BANK OF CHINA TURKEY A.Ş."},
        {bankCode : '00150', bankName : "GOLDEN GLOBAL YATIRIM BANKASI A.Ş.(*)"},
        {bankCode : '00203', bankName : "ALBARAKA TÜRK KATILIM BANKASI A.Ş."},
        {bankCode : '00205', bankName : "KUVEYT TÜRK KATILIM BANKASI A.Ş."},
        {bankCode : '00206', bankName : "TÜRKİYE FİNANS KATILIM BANKASI A.Ş"},
        {bankCode : '00209', bankName : "ZİRAAT KATILIM BANKASI A.Ş."},
        {bankCode : '00210', bankName : "VAKIF KATILIM BANKASI A.Ş."},
        {bankCode : '00211', bankName : "TÜRKİYE EMLAK KATILIM BANKASI A.Ş"},
        {bankCode : '00806', bankName : "MERKEZİ KAYIT KURULUŞU A.Ş."},
        {bankCode : '00807', bankName : "POSTA VE TELGRAF TEŞKİLATI A.Ş.(**)",  }
    ]

    var findCode = allBankCode.find(data => data.bankCode === value)

    return findCode


}



module.exports = {
    findIbanBankCode
}