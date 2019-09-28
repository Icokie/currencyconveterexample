/* global Promise */
// eslint-disable-next-line max-lines
import { FxResponse, RateType } from '../../types/FxApi';
import { CurrencyType } from '../../types/CurrencyType';

export const fxData: FxResponse = {
  disclaimer: 'Usage subject to terms: https://openexchangerates.org/terms',
  license: 'https://openexchangerates.org/license',
  timestamp: 1568930400,
  base: 'USD',
  rates: {
    AED: 3.673088,
    AFN: 78.225613,
    ALL: 109.751255,
    AMD: 476.336185,
    ANG: 1.765393,
    AOA: 367.4235,
    ARS: 56.4919,
    AUD: 1.471577,
    AWG: 1.800999,
    AZN: 1.7025,
    BAM: 1.76784,
    BBD: 2,
    BDT: 84.51136,
    BGN: 1.77127,
    BHD: 0.376965,
    BIF: 1852.685226,
    BMD: 1,
    BND: 1.350458,
    BOB: 6.912758,
    BRL: 4.1677,
    BSD: 1,
    BTC: 0.000097324772,
    BTN: 71.110494,
    BWP: 10.866013,
    BYN: 2.048842,
    BZD: 2.016113,
    CAD: 1.326333,
    CDF: 1664.401856,
    CHF: 0.992761,
    CLF: 0.024984,
    CLP: 716.199571,
    CNH: 7.10078,
    CNY: 7.096275,
    COP: 3379.49864,
    CRC: 578.595529,
    CUC: 1,
    CUP: 25.75,
    CVE: 99.97125,
    CZK: 23.452905,
    DJF: 178.05,
    DKK: 6.7632,
    DOP: 51.592645,
    DZD: 119.92,
    EGP: 16.3085,
    ERN: 14.999811,
    ETB: 29.450274,
    EUR: 0.905638,
    FJD: 2.18445,
    FKP: 0.798278,
    GBP: 0.798278,
    GEL: 2.96,
    GGP: 0.798278,
    GHS: 5.501191,
    GIP: 0.798278,
    GMD: 50.4025,
    GNF: 9229.726162,
    GTQ: 7.709197,
    GYD: 208.751541,
    HKD: 7.83114,
    HNL: 24.642644,
    HRK: 6.702488,
    HTG: 95.53315,
    HUF: 301.02725,
    IDR: 14126.393485,
    ILS: 3.51296,
    IMP: 0.798278,
    INR: 71.3929,
    IQD: 1192.042781,
    IRR: 42105,
    ISK: 124.059715,
    JEP: 0.798278,
    JMD: 135.9337,
    JOD: 0.709003,
    JPY: 108.04175,
    KES: 103.89,
    KGS: 69.6694,
    KHR: 4101.889937,
    KMF: 446.499458,
    KPW: 900,
    KRW: 1194.315895,
    KWD: 0.303732,
    KYD: 0.833479,
    KZT: 387.000457,
    LAK: 8808.520098,
    LBP: 1510.076033,
    LKR: 181.016383,
    LRD: 208.374453,
    LSL: 14.72279,
    LYD: 1.409512,
    MAD: 9.685213,
    MDL: 17.556271,
    MGA: 3743.429131,
    MKD: 55.621437,
    MMK: 1534.800002,
    MNT: 2664.94704,
    MOP: 8.066609,
    MRO: 357,
    MRU: 36.88,
    MUR: 36.266,
    MVR: 15.400026,
    MWK: 724.188774,
    MXN: 19.453,
    MYR: 4.189799,
    MZN: 61.812336,
    NAD: 14.72279,
    NGN: 361.160643,
    NIO: 33.541157,
    NOK: 8.981211,
    NPR: 113.780606,
    NZD: 1.587041,
    OMR: 0.38496,
    PAB: 1,
    PEN: 3.35491,
    PGK: 3.401041,
    PHP: 52.278015,
    PKR: 156.783736,
    PLN: 3.92912,
    PYG: 6366.715534,
    QAR: 3.641584,
    RON: 4.297008,
    RSD: 106.394709,
    RUB: 64.0384,
    RWF: 923.448415,
    SAR: 3.75095,
    SBD: 8.228163,
    SCR: 13.683334,
    SDG: 45.126924,
    SEK: 9.691112,
    SGD: 1.378706,
    SHP: 0.798278,
    SLL: 7379.710113,
    SOS: 579.147702,
    SRD: 7.458,
    SSP: 130.26,
    STD: 21560.79,
    STN: 22.2,
    SVC: 8.751579,
    SYP: 515.639973,
    SZL: 14.719304,
    THB: 30.533,
    TJS: 9.692526,
    TMT: 3.499986,
    TND: 2.864344,
    TOP: 2.315979,
    TRY: 5.718517,
    TTD: 6.769807,
    TWD: 31.000035,
    TZS: 2297.915351,
    UAH: 24.598101,
    UGX: 3675.727171,
    USD: 1,
    UYU: 36.753385,
    UZS: 9402.019277,
    VEF: 248487.642241,
    VES: 21540.345339,
    VND: 23258.476576,
    VUV: 116.322309,
    WST: 2.647697,
    XAF: 594.059491,
    XAG: 0.05623664,
    XAU: 0.00066717,
    XCD: 2.70255,
    XDR: 0.729454,
    XOF: 594.059491,
    XPD: 0.00061626,
    XPF: 108.071343,
    XPT: 0.00106369,
    YER: 250.350747,
    ZAR: 14.817146,
    ZMW: 13.214954,
    ZWL: 322.000001
  }
};

const mockedRates: any = {
  EUR: {
    EUR: 1,
    GBP: 0.89,
    USD: 1.09
  },
  GBP: {
    EUR: 1.13,
    GBP: 1,
    USD: 1.24
  },
  USD: {
    EUR: 0.91,
    GBP: 0.81,
    USD: 1
  }
};

export const fetchRates = (
  currency: CurrencyType,
  { dummy }: { dummy: boolean }
): Promise<RateType> => {
  if (dummy) {
    return new Promise(resolve => resolve(mockedRates[currency]));
  }

  return new Promise<RateType>(resolve => {
    fetch(
      `http://data.fixer.io/api/latest?access_key=358183c9d3e9e0ebf6590821377322ba&base=${currency}&symbols=USD,GBP,EUR`
    )
      .then(response => response.json())
      .then((data: FxResponse) => {
        resolve(data.rates);
      })
      .catch(e => console.log('--- error fetching data ---', e));
  });
};
