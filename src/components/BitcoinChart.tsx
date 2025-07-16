import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot, Legend } from 'recharts';
interface BitcoinDataPoint {
  date: string;
  close: string;
  mayerMultiple: number;
  isBuyMoment?: boolean;
}
const BitcoinChart = () => {
  // Bitcoin price data with Mayer Multiple values
  const bitcoinData: BitcoinDataPoint[] = [{
    date: 'Jul 1, 2024',
    close: '62,851.98',
    mayerMultiple: 1.08
  }, {
    date: 'Jul 2, 2024',
    close: '62,029.02',
    mayerMultiple: 1.064
  }, {
    date: 'Jul 3, 2024',
    close: '60,173.92',
    mayerMultiple: 1.03
  }, {
    date: 'Jul 4, 2024',
    close: '56,977.70',
    mayerMultiple: 0.974
  }, {
    date: 'Jul 5, 2024',
    close: '56,662.38',
    mayerMultiple: 0.968
  }, {
    date: 'Jul 6, 2024',
    close: '58,303.54',
    mayerMultiple: 0.994
  }, {
    date: 'Jul 7, 2024',
    close: '55,849.11',
    mayerMultiple: 0.952
  }, {
    date: 'Jul 8, 2024',
    close: '56,705.10',
    mayerMultiple: 0.965
  }, {
    date: 'Jul 9, 2024',
    close: '58,009.23',
    mayerMultiple: 0.986
  }, {
    date: 'Jul 10, 2024',
    close: '57,742.50',
    mayerMultiple: 0.98
  }, {
    date: 'Jul 11, 2024',
    close: '57,344.91',
    mayerMultiple: 0.972
  }, {
    date: 'Jul 12, 2024',
    close: '57,899.46',
    mayerMultiple: 0.981
  }, {
    date: 'Jul 13, 2024',
    close: '59,231.95',
    mayerMultiple: 1.002
  }, {
    date: 'Jul 14, 2024',
    close: '60,787.79',
    mayerMultiple: 1.027
  }, {
    date: 'Jul 15, 2024',
    close: '64,870.15',
    mayerMultiple: 1.094
  }, {
    date: 'Jul 16, 2024',
    close: '65,097.15',
    mayerMultiple: 1.095
  }, {
    date: 'Jul 17, 2024',
    close: '64,118.79',
    mayerMultiple: 1.077
  }, {
    date: 'Jul 18, 2024',
    close: '63,974.07',
    mayerMultiple: 1.072
  }, {
    date: 'Jul 19, 2024',
    close: '66,710.16',
    mayerMultiple: 1.116
  }, {
    date: 'Jul 20, 2024',
    close: '67,163.65',
    mayerMultiple: 1.122
  }, {
    date: 'Jul 21, 2024',
    close: '68,154.52',
    mayerMultiple: 1.136
  }, {
    date: 'Jul 22, 2024',
    close: '67,585.25',
    mayerMultiple: 1.124
  }, {
    date: 'Jul 23, 2024',
    close: '65,927.67',
    mayerMultiple: 1.095
  }, {
    date: 'Jul 24, 2024',
    close: '65,372.13',
    mayerMultiple: 1.083
  }, {
    date: 'Jul 25, 2024',
    close: '65,777.23',
    mayerMultiple: 1.088
  }, {
    date: 'Jul 26, 2024',
    close: '67,912.06',
    mayerMultiple: 1.122
  }, {
    date: 'Jul 27, 2024',
    close: '67,813.34',
    mayerMultiple: 1.118
  }, {
    date: 'Jul 28, 2024',
    close: '68,255.87',
    mayerMultiple: 1.123
  }, {
    date: 'Jul 29, 2024',
    close: '66,819.91',
    mayerMultiple: 1.098
  }, {
    date: 'Jul 30, 2024',
    close: '66,201.02',
    mayerMultiple: 1.085
  }, {
    date: 'Jul 31, 2024',
    close: '64,619.25',
    mayerMultiple: 1.058
  }, {
    date: 'Aug 1, 2024',
    close: '65,357.50',
    mayerMultiple: 1.068
  }, {
    date: 'Aug 2, 2024',
    close: '61,415.07',
    mayerMultiple: 1.002
  }, {
    date: 'Aug 3, 2024',
    close: '60,680.09',
    mayerMultiple: 0.988
  }, {
    date: 'Aug 4, 2024',
    close: '58,116.98',
    mayerMultiple: 0.945
  }, {
    date: 'Aug 5, 2024',
    close: '53,991.46',
    mayerMultiple: 0.877
  }, {
    date: 'Aug 6, 2024',
    close: '56,034.32',
    mayerMultiple: 0.91
  }, {
    date: 'Aug 7, 2024',
    close: '55,027.46',
    mayerMultiple: 0.892
  }, {
    date: 'Aug 8, 2024',
    close: '61,710.14',
    mayerMultiple: 0.999
  }, {
    date: 'Aug 9, 2024',
    close: '60,880.11',
    mayerMultiple: 0.984
  }, {
    date: 'Aug 10, 2024',
    close: '60,945.81',
    mayerMultiple: 0.983
  }, {
    date: 'Aug 11, 2024',
    close: '58,719.48',
    mayerMultiple: 0.946
  }, {
    date: 'Aug 12, 2024',
    close: '59,354.52',
    mayerMultiple: 0.955
  }, {
    date: 'Aug 13, 2024',
    close: '60,609.57',
    mayerMultiple: 0.973
  }, {
    date: 'Aug 14, 2024',
    close: '58,737.27',
    mayerMultiple: 0.942
  }, {
    date: 'Aug 15, 2024',
    close: '57,560.10',
    mayerMultiple: 0.922
  }, {
    date: 'Aug 16, 2024',
    close: '58,894.11',
    mayerMultiple: 0.942
  }, {
    date: 'Aug 17, 2024',
    close: '59,478.97',
    mayerMultiple: 0.95
  }, {
    date: 'Aug 18, 2024',
    close: '58,483.96',
    mayerMultiple: 0.933
  }, {
    date: 'Aug 19, 2024',
    close: '59,493.45',
    mayerMultiple: 0.948
  }, {
    date: 'Aug 20, 2024',
    close: '59,012.79',
    mayerMultiple: 0.939
  }, {
    date: 'Aug 21, 2024',
    close: '61,175.19',
    mayerMultiple: 0.972
  }, {
    date: 'Aug 22, 2024',
    close: '60,381.91',
    mayerMultiple: 0.958
  }, {
    date: 'Aug 23, 2024',
    close: '64,094.36',
    mayerMultiple: 1.015
  }, {
    date: 'Aug 24, 2024',
    close: '64,178.99',
    mayerMultiple: 1.015
  }, {
    date: 'Aug 25, 2024',
    close: '64,333.54',
    mayerMultiple: 1.016
  }, {
    date: 'Aug 26, 2024',
    close: '62,880.66',
    mayerMultiple: 0.992
  }, {
    date: 'Aug 27, 2024',
    close: '59,504.13',
    mayerMultiple: 0.937
  }, {
    date: 'Aug 28, 2024',
    close: '59,027.63',
    mayerMultiple: 0.929
  }, {
    date: 'Aug 29, 2024',
    close: '59,388.18',
    mayerMultiple: 0.934
  }, {
    date: 'Aug 30, 2024',
    close: '59,119.48',
    mayerMultiple: 0.929
  }, {
    date: 'Aug 31, 2024',
    close: '58,969.90',
    mayerMultiple: 0.926
  }, {
    date: 'Sep 1, 2024',
    close: '57,325.49',
    mayerMultiple: 0.9
  }, {
    date: 'Sep 2, 2024',
    close: '59,112.48',
    mayerMultiple: 0.927
  }, {
    date: 'Sep 3, 2024',
    close: '57,431.02',
    mayerMultiple: 0.901
  }, {
    date: 'Sep 4, 2024',
    close: '57,971.54',
    mayerMultiple: 0.909
  }, {
    date: 'Sep 5, 2024',
    close: '56,160.49',
    mayerMultiple: 0.88
  }, {
    date: 'Sep 6, 2024',
    close: '53,948.75',
    mayerMultiple: 0.845
  }, {
    date: 'Sep 7, 2024',
    close: '54,139.69',
    mayerMultiple: 0.848
  }, {
    date: 'Sep 8, 2024',
    close: '54,841.57',
    mayerMultiple: 0.859
  }, {
    date: 'Sep 9, 2024',
    close: '57,019.54',
    mayerMultiple: 0.893
  }, {
    date: 'Sep 10, 2024',
    close: '57,648.71',
    mayerMultiple: 0.902
  }, {
    date: 'Sep 11, 2024',
    close: '57,343.17',
    mayerMultiple: 0.897
  }, {
    date: 'Sep 12, 2024',
    close: '58,127.01',
    mayerMultiple: 0.908
  }, {
    date: 'Sep 13, 2024',
    close: '60,571.30',
    mayerMultiple: 0.946
  }, {
    date: 'Sep 14, 2024',
    close: '60,005.12',
    mayerMultiple: 0.937
  }, {
    date: 'Sep 15, 2024',
    close: '59,182.84',
    mayerMultiple: 0.925
  }, {
    date: 'Sep 16, 2024',
    close: '58,192.51',
    mayerMultiple: 0.909
  }, {
    date: 'Sep 17, 2024',
    close: '60,308.54',
    mayerMultiple: 0.943
  }, {
    date: 'Sep 18, 2024',
    close: '61,649.68',
    mayerMultiple: 0.964
  }, {
    date: 'Sep 19, 2024',
    close: '62,940.46',
    mayerMultiple: 0.984
  }, {
    date: 'Sep 20, 2024',
    close: '63,192.98',
    mayerMultiple: 0.988
  }, {
    date: 'Sep 21, 2024',
    close: '63,394.84',
    mayerMultiple: 0.991
  }, {
    date: 'Sep 22, 2024',
    close: '63,648.71',
    mayerMultiple: 0.995
  }, {
    date: 'Sep 23, 2024',
    close: '63,329.80',
    mayerMultiple: 0.991
  }, {
    date: 'Sep 24, 2024',
    close: '64,301.97',
    mayerMultiple: 1.006
  }, {
    date: 'Sep 25, 2024',
    close: '63,143.14',
    mayerMultiple: 0.989
  }, {
    date: 'Sep 26, 2024',
    close: '65,181.02',
    mayerMultiple: 1.021
  }, {
    date: 'Sep 27, 2024',
    close: '65,790.66',
    mayerMultiple: 1.031
  }, {
    date: 'Sep 28, 2024',
    close: '65,887.65',
    mayerMultiple: 1.033
  }, {
    date: 'Sep 29, 2024',
    close: '65,635.30',
    mayerMultiple: 1.029
  }, {
    date: 'Sep 30, 2024',
    close: '63,329.50',
    mayerMultiple: 0.994
  }, {
    date: 'Oct 1, 2024',
    close: '60,837.01',
    mayerMultiple: 0.955
  }, {
    date: 'Oct 2, 2024',
    close: '60,632.79',
    mayerMultiple: 0.953
  }, {
    date: 'Oct 3, 2024',
    close: '60,759.40',
    mayerMultiple: 0.955
  }, {
    date: 'Oct 4, 2024',
    close: '62,067.48',
    mayerMultiple: 0.976
  }, {
    date: 'Oct 5, 2024',
    close: '62,089.95',
    mayerMultiple: 0.976
  }, {
    date: 'Oct 6, 2024',
    close: '62,818.95',
    mayerMultiple: 0.988
  }, {
    date: 'Oct 7, 2024',
    close: '62,236.66',
    mayerMultiple: 0.979
  }, {
    date: 'Oct 8, 2024',
    close: '62,131.97',
    mayerMultiple: 0.978
  }, {
    date: 'Oct 9, 2024',
    close: '60,582.10',
    mayerMultiple: 0.954
  }, {
    date: 'Oct 10, 2024',
    close: '60,274.50',
    mayerMultiple: 0.949
  }, {
    date: 'Oct 11, 2024',
    close: '62,445.09',
    mayerMultiple: 0.984
  }, {
    date: 'Oct 12, 2024',
    close: '63,193.02',
    mayerMultiple: 0.996
  }, {
    date: 'Oct 13, 2024',
    close: '62,851.38',
    mayerMultiple: 0.992
  }, {
    date: 'Oct 14, 2024',
    close: '66,046.13',
    mayerMultiple: 1.042
  }, {
    date: 'Oct 15, 2024',
    close: '67,041.11',
    mayerMultiple: 1.058
  }, {
    date: 'Oct 16, 2024',
    close: '67,612.72',
    mayerMultiple: 1.068
  }, {
    date: 'Oct 17, 2024',
    close: '67,399.84',
    mayerMultiple: 1.065
  }, {
    date: 'Oct 18, 2024',
    close: '68,418.79',
    mayerMultiple: 1.081
  }, {
    date: 'Oct 19, 2024',
    close: '68,362.73',
    mayerMultiple: 1.08
  }, {
    date: 'Oct 20, 2024',
    close: '69,001.70',
    mayerMultiple: 1.089
  }, {
    date: 'Oct 21, 2024',
    close: '67,367.85',
    mayerMultiple: 1.064
  }, {
    date: 'Oct 22, 2024',
    close: '67,361.41',
    mayerMultiple: 1.064
  }, {
    date: 'Oct 23, 2024',
    close: '66,432.20',
    mayerMultiple: 1.049
  }, {
    date: 'Oct 24, 2024',
    close: '68,161.05',
    mayerMultiple: 1.077
  }, {
    date: 'Oct 25, 2024',
    close: '66,642.41',
    mayerMultiple: 1.053
  }, {
    date: 'Oct 26, 2024',
    close: '67,014.70',
    mayerMultiple: 1.059
  }, {
    date: 'Oct 27, 2024',
    close: '67,929.30',
    mayerMultiple: 1.074
  }, {
    date: 'Oct 28, 2024',
    close: '69,907.76',
    mayerMultiple: 1.105
  }, {
    date: 'Oct 29, 2024',
    close: '72,720.49',
    mayerMultiple: 1.149
  }, {
    date: 'Oct 30, 2024',
    close: '72,339.54',
    mayerMultiple: 1.142
  }, {
    date: 'Oct 31, 2024',
    close: '70,215.19',
    mayerMultiple: 1.108
  }, {
    date: 'Nov 1, 2024',
    close: '69,482.47',
    mayerMultiple: 1.096
  }, {
    date: 'Nov 2, 2024',
    close: '69,289.27',
    mayerMultiple: 1.093
  }, {
    date: 'Nov 3, 2024',
    close: '68,741.12',
    mayerMultiple: 1.083
  }, {
    date: 'Nov 4, 2024',
    close: '67,811.51',
    mayerMultiple: 1.068
  }, {
    date: 'Nov 5, 2024',
    close: '69,359.56',
    mayerMultiple: 1.092
  }, {
    date: 'Nov 6, 2024',
    close: '75,639.08',
    mayerMultiple: 1.19
  }, {
    date: 'Nov 7, 2024',
    close: '75,904.86',
    mayerMultiple: 1.193
  }, {
    date: 'Nov 8, 2024',
    close: '76,545.48',
    mayerMultiple: 1.202
  }, {
    date: 'Nov 9, 2024',
    close: '76,778.87',
    mayerMultiple: 1.205
  }, {
    date: 'Nov 10, 2024',
    close: '80,474.19',
    mayerMultiple: 1.262
  }, {
    date: 'Nov 11, 2024',
    close: '88,701.48',
    mayerMultiple: 1.388
  }, {
    date: 'Nov 12, 2024',
    close: '87,955.81',
    mayerMultiple: 1.374
  }, {
    date: 'Nov 13, 2024',
    close: '90,584.16',
    mayerMultiple: 1.412
  }, {
    date: 'Nov 14, 2024',
    close: '87,250.43',
    mayerMultiple: 1.357
  }, {
    date: 'Nov 15, 2024',
    close: '91,066.01',
    mayerMultiple: 1.414
  }, {
    date: 'Nov 16, 2024',
    close: '90,558.48',
    mayerMultiple: 1.402
  }, {
    date: 'Nov 17, 2024',
    close: '89,845.85',
    mayerMultiple: 1.388
  }, {
    date: 'Nov 18, 2024',
    close: '90,542.64',
    mayerMultiple: 1.395
  }, {
    date: 'Nov 19, 2024',
    close: '92,343.79',
    mayerMultiple: 1.42
  }, {
    date: 'Nov 20, 2024',
    close: '94,339.49',
    mayerMultiple: 1.447
  }, {
    date: 'Nov 21, 2024',
    close: '98,504.73',
    mayerMultiple: 1.507
  }, {
    date: 'Nov 22, 2024',
    close: '98,997.66',
    mayerMultiple: 1.511
  }, {
    date: 'Nov 23, 2024',
    close: '97,777.28',
    mayerMultiple: 1.488
  }, {
    date: 'Nov 24, 2024',
    close: '98,013.82',
    mayerMultiple: 1.487
  }, {
    date: 'Nov 25, 2024',
    close: '93,102.30',
    mayerMultiple: 1.41
  }, {
    date: 'Nov 26, 2024',
    close: '91,985.32',
    mayerMultiple: 1.389
  }, {
    date: 'Nov 27, 2024',
    close: '95,962.53',
    mayerMultiple: 1.446
  }, {
    date: 'Nov 28, 2024',
    close: '95,652.47',
    mayerMultiple: 1.437
  }, {
    date: 'Nov 29, 2024',
    close: '97,461.52',
    mayerMultiple: 1.461
  }, {
    date: 'Nov 30, 2024',
    close: '96,449.05',
    mayerMultiple: 1.442
  }, {
    date: 'Dec 1, 2024',
    close: '97,279.79',
    mayerMultiple: 1.451
  }, {
    date: 'Dec 2, 2024',
    close: '95,865.30',
    mayerMultiple: 1.426
  }, {
    date: 'Dec 3, 2024',
    close: '96,002.16',
    mayerMultiple: 1.425
  }, {
    date: 'Dec 4, 2024',
    close: '98,768.53',
    mayerMultiple: 1.463
  }, {
    date: 'Dec 5, 2024',
    close: '96,593.57',
    mayerMultiple: 1.428
  }, {
    date: 'Dec 6, 2024',
    close: '99,920.71',
    mayerMultiple: 1.474
  }, {
    date: 'Dec 7, 2024',
    close: '99,923.34',
    mayerMultiple: 1.47
  }, {
    date: 'Dec 8, 2024',
    close: '101,236.02',
    mayerMultiple: 1.486
  }, {
    date: 'Dec 9, 2024',
    close: '97,432.72',
    mayerMultiple: 1.427
  }, {
    date: 'Dec 10, 2024',
    close: '96,675.43',
    mayerMultiple: 1.413
  }, {
    date: 'Dec 11, 2024',
    close: '101,173.03',
    mayerMultiple: 1.476
  }, {
    date: 'Dec 12, 2024',
    close: '100,043.00',
    mayerMultiple: 1.456
  }, {
    date: 'Dec 13, 2024',
    close: '101,459.26',
    mayerMultiple: 1.473
  }, {
    date: 'Dec 14, 2024',
    close: '101,372.97',
    mayerMultiple: 1.468
  }, {
    date: 'Dec 15, 2024',
    close: '104,298.70',
    mayerMultiple: 1.507
  }, {
    date: 'Dec 16, 2024',
    close: '106,029.72',
    mayerMultiple: 1.527
  }, {
    date: 'Dec 17, 2024',
    close: '106,140.60',
    mayerMultiple: 1.525
  }, {
    date: 'Dec 18, 2024',
    close: '100,041.54',
    mayerMultiple: 1.434
  }, {
    date: 'Dec 19, 2024',
    close: '97,490.95',
    mayerMultiple: 1.394
  }, {
    date: 'Dec 20, 2024',
    close: '97,755.93',
    mayerMultiple: 1.395
  }, {
    date: 'Dec 21, 2024',
    close: '97,224.73',
    mayerMultiple: 1.385
  }, {
    date: 'Dec 22, 2024',
    close: '95,104.94',
    mayerMultiple: 1.352
  }, {
    date: 'Dec 23, 2024',
    close: '94,686.24',
    mayerMultiple: 1.344
  }, {
    date: 'Dec 24, 2024',
    close: '98,676.09',
    mayerMultiple: 1.398
  }, {
    date: 'Dec 25, 2024',
    close: '99,299.20',
    mayerMultiple: 1.404
  }, {
    date: 'Dec 26, 2024',
    close: '95,795.52',
    mayerMultiple: 1.352
  }, {
    date: 'Dec 27, 2024',
    close: '94,164.86',
    mayerMultiple: 1.326
  }, {
    date: 'Dec 28, 2024',
    close: '95,163.93',
    mayerMultiple: 1.338
  }, {
    date: 'Dec 29, 2024',
    close: '93,530.23',
    mayerMultiple: 1.313
  }, {
    date: 'Dec 30, 2024',
    close: '92,643.21',
    mayerMultiple: 1.298
  }, {
    date: 'Dec 31, 2024',
    close: '93,429.20',
    mayerMultiple: 1.306
  }, {
    date: 'Jan 1, 2025',
    close: '94,419.76',
    mayerMultiple: 1.318
  }, {
    date: 'Jan 2, 2025',
    close: '96,886.88',
    mayerMultiple: 1.349
  }, {
    date: 'Jan 3, 2025',
    close: '98,107.43',
    mayerMultiple: 1.363
  }, {
    date: 'Jan 4, 2025',
    close: '98,236.23',
    mayerMultiple: 1.362
  }, {
    date: 'Jan 5, 2025',
    close: '98,314.96',
    mayerMultiple: 1.36
  }, {
    date: 'Jan 6, 2025',
    close: '102,078.09',
    mayerMultiple: 1.408
  }, {
    date: 'Jan 7, 2025',
    close: '96,922.70',
    mayerMultiple: 1.334
  }, {
    date: 'Jan 8, 2025',
    close: '95,043.52',
    mayerMultiple: 1.305
  }, {
    date: 'Jan 9, 2025',
    close: '92,484.04',
    mayerMultiple: 1.268
  }, {
    date: 'Jan 10, 2025',
    close: '94,701.45',
    mayerMultiple: 1.295
  }, {
    date: 'Jan 11, 2025',
    close: '94,566.59',
    mayerMultiple: 1.29
  }, {
    date: 'Jan 12, 2025',
    close: '94,488.44',
    mayerMultiple: 1.286
  }, {
    date: 'Jan 13, 2025',
    close: '94,516.52',
    mayerMultiple: 1.284
  }, {
    date: 'Jan 14, 2025',
    close: '96,534.05',
    mayerMultiple: 1.308
  }, {
    date: 'Jan 15, 2025',
    close: '100,504.49',
    mayerMultiple: 1.358
  }, {
    date: 'Jan 16, 2025',
    close: '99,756.91',
    mayerMultiple: 1.345
  }, {
    date: 'Jan 17, 2025',
    close: '104,462.04',
    mayerMultiple: 1.404
  }, {
    date: 'Jan 18, 2025',
    close: '104,408.07',
    mayerMultiple: 1.399
  }, {
    date: 'Jan 19, 2025',
    close: '101,089.61',
    mayerMultiple: 1.351
  }, {
    date: 'Jan 20, 2025',
    close: '102,016.66',
    mayerMultiple: 1.359
  }, {
    date: 'Jan 21, 2025',
    close: '106,146.27',
    mayerMultiple: 1.41
  }, {
    date: 'Jan 22, 2025',
    close: '103,653.07',
    mayerMultiple: 1.373
  }, {
    date: 'Jan 23, 2025',
    close: '103,960.17',
    mayerMultiple: 1.372
  }, {
    date: 'Jan 24, 2025',
    close: '104,819.48',
    mayerMultiple: 1.379
  }, {
    date: 'Jan 25, 2025',
    close: '104,714.65',
    mayerMultiple: 1.374
  }, {
    date: 'Jan 26, 2025',
    close: '102,682.50',
    mayerMultiple: 1.343
  }, {
    date: 'Jan 27, 2025',
    close: '102,087.69',
    mayerMultiple: 1.331
  }, {
    date: 'Jan 28, 2025',
    close: '101,332.48',
    mayerMultiple: 1.318
  }, {
    date: 'Jan 29, 2025',
    close: '103,703.21',
    mayerMultiple: 1.345
  }, {
    date: 'Jan 30, 2025',
    close: '104,735.30',
    mayerMultiple: 1.354
  }, {
    date: 'Jan 31, 2025',
    close: '102,405.02',
    mayerMultiple: 1.321
  }, {
    date: 'Feb 1, 2025',
    close: '100,655.91',
    mayerMultiple: 1.295
  }, {
    date: 'Feb 2, 2025',
    close: '97,688.98',
    mayerMultiple: 1.255
  }, {
    date: 'Feb 3, 2025',
    close: '101,405.42',
    mayerMultiple: 1.299
  }, {
    date: 'Feb 4, 2025',
    close: '97,871.82',
    mayerMultiple: 1.251
  }, {
    date: 'Feb 5, 2025',
    close: '96,615.45',
    mayerMultiple: 1.233
  }, {
    date: 'Feb 6, 2025',
    close: '96,593.30',
    mayerMultiple: 1.23
  }, {
    date: 'Feb 7, 2025',
    close: '96,529.09',
    mayerMultiple: 1.227
  }, {
    date: 'Feb 8, 2025',
    close: '96,482.45',
    mayerMultiple: 1.224
  }, {
    date: 'Feb 9, 2025',
    close: '96,500.09',
    mayerMultiple: 1.222
  }, {
    date: 'Feb 10, 2025',
    close: '97,437.55',
    mayerMultiple: 1.232
  }, {
    date: 'Feb 11, 2025',
    close: '95,747.43',
    mayerMultiple: 1.208
  }, {
    date: 'Feb 12, 2025',
    close: '97,885.86',
    mayerMultiple: 1.233
  }, {
    date: 'Feb 13, 2025',
    close: '96,623.87',
    mayerMultiple: 1.215
  }, {
    date: 'Feb 14, 2025',
    close: '97,508.97',
    mayerMultiple: 1.223
  }, {
    date: 'Feb 15, 2025',
    close: '97,580.35',
    mayerMultiple: 1.222
  }, {
    date: 'Feb 16, 2025',
    close: '96,175.03',
    mayerMultiple: 1.202
  }, {
    date: 'Feb 17, 2025',
    close: '95,773.38',
    mayerMultiple: 1.195
  }, {
    date: 'Feb 18, 2025',
    close: '95,539.55',
    mayerMultiple: 1.189
  }, {
    date: 'Feb 19, 2025',
    close: '96,635.61',
    mayerMultiple: 1.2
  }, {
    date: 'Feb 20, 2025',
    close: '98,333.94',
    mayerMultiple: 1.218
  }, {
    date: 'Feb 21, 2025',
    close: '96,125.55',
    mayerMultiple: 1.188
  }, {
    date: 'Feb 22, 2025',
    close: '96,577.76',
    mayerMultiple: 1.19
  }, {
    date: 'Feb 23, 2025',
    close: '96,273.92',
    mayerMultiple: 1.184
  }, {
    date: 'Feb 24, 2025',
    close: '91,418.17',
    mayerMultiple: 1.122
  }, {
    date: 'Feb 25, 2025',
    close: '88,736.17',
    mayerMultiple: 1.087
  }, {
    date: 'Feb 26, 2025',
    close: '84,347.02',
    mayerMultiple: 1.032
  }, {
    date: 'Feb 27, 2025',
    close: '84,704.23',
    mayerMultiple: 1.035
  }, {
    date: 'Feb 28, 2025',
    close: '84,373.01',
    mayerMultiple: 1.029
  }, {
    date: 'Mar 1, 2025',
    close: '86,031.91',
    mayerMultiple: 1.048
  }, {
    date: 'Mar 2, 2025',
    close: '94,248.35',
    mayerMultiple: 1.145
  }, {
    date: 'Mar 3, 2025',
    close: '86,065.67',
    mayerMultiple: 1.044
  }, {
    date: 'Mar 4, 2025',
    close: '87,222.20',
    mayerMultiple: 1.056
  }, {
    date: 'Mar 5, 2025',
    close: '90,623.56',
    mayerMultiple: 1.095
  }, {
    date: 'Mar 6, 2025',
    close: '89,961.73',
    mayerMultiple: 1.085
  }, {
    date: 'Mar 7, 2025',
    close: '86,742.67',
    mayerMultiple: 1.045
  }, {
    date: 'Mar 8, 2025',
    close: '86,154.59',
    mayerMultiple: 1.036
  }, {
    date: 'Mar 9, 2025',
    close: '80,601.04',
    mayerMultiple: 0.968
  }, {
    date: 'Mar 10, 2025',
    close: '78,532.00',
    mayerMultiple: 0.942
  }, {
    date: 'Mar 11, 2025',
    close: '82,862.21',
    mayerMultiple: 0.993
  }, {
    date: 'Mar 12, 2025',
    close: '83,722.36',
    mayerMultiple: 1.002
  }, {
    date: 'Mar 13, 2025',
    close: '81,066.70',
    mayerMultiple: 0.969
  }, {
    date: 'Mar 14, 2025',
    close: '83,969.10',
    mayerMultiple: 1.003
  }, {
    date: 'Mar 15, 2025',
    close: '84,343.11',
    mayerMultiple: 1.006
  }, {
    date: 'Mar 16, 2025',
    close: '82,579.69',
    mayerMultiple: 0.983
  }, {
    date: 'Mar 17, 2025',
    close: '84,075.69',
    mayerMultiple: 1
  }, {
    date: 'Mar 18, 2025',
    close: '82,718.50',
    mayerMultiple: 0.982
  }, {
    date: 'Mar 19, 2025',
    close: '86,854.23',
    mayerMultiple: 1.03
  }, {
    date: 'Mar 20, 2025',
    close: '84,167.20',
    mayerMultiple: 0.996
  }, {
    date: 'Mar 21, 2025',
    close: '84,043.24',
    mayerMultiple: 0.993
  }, {
    date: 'Mar 22, 2025',
    close: '83,832.48',
    mayerMultiple: 0.989
  }, {
    date: 'Mar 23, 2025',
    close: '86,054.38',
    mayerMultiple: 1.014
  }, {
    date: 'Mar 24, 2025',
    close: '87,498.91',
    mayerMultiple: 1.029
  }, {
    date: 'Mar 25, 2025',
    close: '87,471.70',
    mayerMultiple: 1.026
  }, {
    date: 'Mar 26, 2025',
    close: '86,900.88',
    mayerMultiple: 1.018
  }, {
    date: 'Mar 27, 2025',
    close: '87,177.10',
    mayerMultiple: 1.019
  }, {
    date: 'Mar 28, 2025',
    close: '84,353.15',
    mayerMultiple: 0.985
  }, {
    date: 'Mar 29, 2025',
    close: '82,597.59',
    mayerMultiple: 0.963
  }, {
    date: 'Mar 30, 2025',
    close: '82,334.52',
    mayerMultiple: 0.958
  }, {
    date: 'Mar 31, 2025',
    close: '82,548.91',
    mayerMultiple: 0.959
  }, {
    date: 'Apr 1, 2025',
    close: '85,169.17',
    mayerMultiple: 0.988
  }, {
    date: 'Apr 2, 2025',
    close: '82,485.71',
    mayerMultiple: 0.956
  }, {
    date: 'Apr 3, 2025',
    close: '83,102.83',
    mayerMultiple: 0.962
  }, {
    date: 'Apr 4, 2025',
    close: '83,843.80',
    mayerMultiple: 0.969
  }, {
    date: 'Apr 5, 2025',
    close: '83,504.80',
    mayerMultiple: 0.964
  }, {
    date: 'Apr 6, 2025',
    close: '78,214.48',
    mayerMultiple: 0.902
  }, {
    date: 'Apr 7, 2025',
    close: '79,235.34',
    mayerMultiple: 0.913
  }, {
    date: 'Apr 8, 2025',
    close: '76,271.95',
    mayerMultiple: 0.878
  }, {
    date: 'Apr 9, 2025',
    close: '82,573.95',
    mayerMultiple: 0.949
  }, {
    date: 'Apr 10, 2025',
    close: '79,626.14',
    mayerMultiple: 0.915
  }, {
    date: 'Apr 11, 2025',
    close: '83,404.84',
    mayerMultiple: 0.957
  }, {
    date: 'Apr 12, 2025',
    close: '85,287.11',
    mayerMultiple: 0.977
  }, {
    date: 'Apr 13, 2025',
    close: '83,684.98',
    mayerMultiple: 0.958
  }, {
    date: 'Apr 14, 2025',
    close: '84,542.39',
    mayerMultiple: 0.967
  }, {
    date: 'Apr 15, 2025',
    close: '83,668.99',
    mayerMultiple: 0.956
  }, {
    date: 'Apr 16, 2025',
    close: '84,033.87',
    mayerMultiple: 0.959
  }, {
    date: 'Apr 17, 2025',
    close: '84,895.75',
    mayerMultiple: 0.968
  }, {
    date: 'Apr 18, 2025',
    close: '84,450.80',
    mayerMultiple: 0.961
  }, {
    date: 'Apr 19, 2025',
    close: '85,063.41',
    mayerMultiple: 0.967
  }, {
    date: 'Apr 20, 2025',
    close: '85,174.30',
    mayerMultiple: 0.967
  }, {
    date: 'Apr 21, 2025',
    close: '87,518.91',
    mayerMultiple: 0.992
  }, {
    date: 'Apr 22, 2025',
    close: '93,441.89',
    mayerMultiple: 1.057
  }, {
    date: 'Apr 23, 2025',
    close: '93,699.11',
    mayerMultiple: 1.058
  }, {
    date: 'Apr 24, 2025',
    close: '93,943.80',
    mayerMultiple: 1.059
  }, {
    date: 'Apr 25, 2025',
    close: '94,720.50',
    mayerMultiple: 1.066
  }, {
    date: 'Apr 26, 2025',
    close: '94,646.93',
    mayerMultiple: 1.063
  }, {
    date: 'Apr 27, 2025',
    close: '93,754.84',
    mayerMultiple: 1.051
  }, {
    date: 'Apr 28, 2025',
    close: '94,978.75',
    mayerMultiple: 1.063
  }, {
    date: 'Apr 29, 2025',
    close: '94,284.79',
    mayerMultiple: 1.053
  }, {
    date: 'Apr 30, 2025',
    close: '94,207.31',
    mayerMultiple: 1.051
  }, {
    date: 'May 1, 2025',
    close: '96,492.34',
    mayerMultiple: 1.074
  }, {
    date: 'May 2, 2025',
    close: '96,910.07',
    mayerMultiple: 1.077
  }, {
    date: 'May 3, 2025',
    close: '95,891.80',
    mayerMultiple: 1.064
  }, {
    date: 'May 4, 2025',
    close: '94,315.98',
    mayerMultiple: 1.045
  }, {
    date: 'May 5, 2025',
    close: '94,748.05',
    mayerMultiple: 1.048
  }, {
    date: 'May 6, 2025',
    close: '96,802.48',
    mayerMultiple: 1.069
  }, {
    date: 'May 7, 2025',
    close: '97,032.32',
    mayerMultiple: 1.07
  }, {
    date: 'May 8, 2025',
    close: '103,241.46',
    mayerMultiple: 1.136
  }, {
    date: 'May 9, 2025',
    close: '102,970.85',
    mayerMultiple: 1.131
  }, {
    date: 'May 10, 2025',
    close: '104,696.33',
    mayerMultiple: 1.148
  }, {
    date: 'May 11, 2025',
    close: '104,106.36',
    mayerMultiple: 1.139
  }, {
    date: 'May 12, 2025',
    close: '102,812.95',
    mayerMultiple: 1.123
  }, {
    date: 'May 13, 2025',
    close: '104,169.81',
    mayerMultiple: 1.135
  }, {
    date: 'May 14, 2025',
    close: '103,539.41',
    mayerMultiple: 1.126
  }, {
    date: 'May 15, 2025',
    close: '103,744.64',
    mayerMultiple: 1.126
  }, {
    date: 'May 16, 2025',
    close: '103,489.29',
    mayerMultiple: 1.121
  }, {
    date: 'May 17, 2025',
    close: '103,191.09',
    mayerMultiple: 1.116
  }, {
    date: 'May 18, 2025',
    close: '106,446.01',
    mayerMultiple: 1.149
  }, {
    date: 'May 19, 2025',
    close: '105,606.18',
    mayerMultiple: 1.138
  }, {
    date: 'May 20, 2025',
    close: '106,791.09',
    mayerMultiple: 1.148
  }, {
    date: 'May 21, 2025',
    close: '109,678.08',
    mayerMultiple: 1.177
  }, {
    date: 'May 22, 2025',
    close: '111,673.28',
    mayerMultiple: 1.196
  }, {
    date: 'May 23, 2025',
    close: '107,287.80',
    mayerMultiple: 1.146
  }, {
    date: 'May 24, 2025',
    close: '107,791.16',
    mayerMultiple: 1.149
  }, {
    date: 'May 25, 2025',
    close: '109,035.39',
    mayerMultiple: 1.16
  }, {
    date: 'May 26, 2025',
    close: '109,440.37',
    mayerMultiple: 1.163
  }, {
    date: 'May 27, 2025',
    close: '108,994.64',
    mayerMultiple: 1.156
  }, {
    date: 'May 28, 2025',
    close: '107,802.33',
    mayerMultiple: 1.141
  }, {
    date: 'May 29, 2025',
    close: '105,641.76',
    mayerMultiple: 1.117
  }, {
    date: 'May 30, 2025',
    close: '103,998.57',
    mayerMultiple: 1.099
  }, {
    date: 'May 31, 2025',
    close: '104,638.09',
    mayerMultiple: 1.105
  }, {
    date: 'Jun 1, 2025',
    close: '105,652.10',
    mayerMultiple: 1.114
  }, {
    date: 'Jun 2, 2025',
    close: '105,881.53',
    mayerMultiple: 1.116
  }, {
    date: 'Jun 3, 2025',
    close: '105,432.47',
    mayerMultiple: 1.11
  }, {
    date: 'Jun 4, 2025',
    close: '104,731.98',
    mayerMultiple: 1.102
  }, {
    date: 'Jun 5, 2025',
    close: '101,575.95',
    mayerMultiple: 1.068
  }, {
    date: 'Jun 6, 2025',
    close: '104,390.34',
    mayerMultiple: 1.097
  }, {
    date: 'Jun 7, 2025',
    close: '105,615.63',
    mayerMultiple: 1.109
  }, {
    date: 'Jun 8, 2025',
    close: '105,793.65',
    mayerMultiple: 1.11
  }, {
    date: 'Jun 9, 2025',
    close: '110,294.10',
    mayerMultiple: 1.157
  }, {
    date: 'Jun 10, 2025',
    close: '110,257.23',
    mayerMultiple: 1.156
  }, {
    date: 'Jun 11, 2025',
    close: '108,686.63',
    mayerMultiple: 1.138
  }, {
    date: 'Jun 12, 2025',
    close: '105,929.05',
    mayerMultiple: 1.109
  }, {
    date: 'Jun 13, 2025',
    close: '106,090.97',
    mayerMultiple: 1.11
  }, {
    date: 'Jun 14, 2025',
    close: '105,472.41',
    mayerMultiple: 1.103
  }, {
    date: 'Jun 15, 2025',
    close: '105,552.02',
    mayerMultiple: 1.103
  }, {
    date: 'Jun 16, 2025',
    close: '106,796.76',
    mayerMultiple: 1.115
  }, {
    date: 'Jun 17, 2025',
    close: '104,601.12',
    mayerMultiple: 1.092
  }, {
    date: 'Jun 18, 2025',
    close: '104,883.33',
    mayerMultiple: 1.095
  }, {
    date: 'Jun 19, 2025',
    close: '104,684.29',
    mayerMultiple: 1.092
  }, {
    date: 'Jun 20, 2025',
    close: '103,309.60',
    mayerMultiple: 1.077
  }, {
    date: 'Jun 21, 2025',
    close: '102,257.41',
    mayerMultiple: 1.066
  }, {
    date: 'Jun 22, 2025',
    close: '100,987.14',
    mayerMultiple: 1.053
  }, {
    date: 'Jun 23, 2025',
    close: '105,577.77',
    mayerMultiple: 1.1
  }, {
    date: 'Jun 24, 2025',
    close: '106,045.63',
    mayerMultiple: 1.104
  }, {
    date: 'Jun 25, 2025',
    close: '107,361.26',
    mayerMultiple: 1.118
  }, {
    date: 'Jun 26, 2025',
    close: '106,960.00',
    mayerMultiple: 1.113
  }, {
    date: 'Jun 27, 2025',
    close: '107,088.43',
    mayerMultiple: 1.114
  }, {
    date: 'Jun 28, 2025',
    close: '107,327.70',
    mayerMultiple: 1.116
  }, {
    date: 'Jun 29, 2025',
    close: '108,385.57',
    mayerMultiple: 1.126
  }, {
    date: 'Jun 30, 2025',
    close: '107,135.34',
    mayerMultiple: 1.113
  }, {
    date: 'Jul 1, 2025',
    close: '105,698.28',
    mayerMultiple: 1.098
  }, {
    date: 'Jul 2, 2025',
    close: '108,859.32',
    mayerMultiple: 1.13
  }, {
    date: 'Jul 3, 2025',
    close: '109,647.98',
    mayerMultiple: 1.138
  }, {
    date: 'Jul 4, 2025',
    close: '108,034.34',
    mayerMultiple: 1.121
  }, {
    date: 'Jul 5, 2025',
    close: '108,231.18',
    mayerMultiple: 1.123
  }, {
    date: 'Jul 6, 2025',
    close: '109,232.07',
    mayerMultiple: 1.133
  }, {
    date: 'Jul 7, 2025',
    close: '108,299.85',
    mayerMultiple: 1.123
  }, {
    date: 'Jul 8, 2025',
    close: '108,950.27',
    mayerMultiple: 1.129
  }, {
    date: 'Jul 9, 2025',
    close: '111,326.55',
    mayerMultiple: 1.153
  }, {
    date: 'Jul 10, 2025',
    close: '115,987.20',
    mayerMultiple: 1.2
  }, {
    date: 'Jul 11, 2025',
    close: '117,516.99',
    mayerMultiple: 1.214
  }, {
    date: 'Jul 12, 2025',
    close: '117,435.23',
    mayerMultiple: 1.212
  }, {
    date: 'Jul 13, 2025',
    close: '119,116.12',
    mayerMultiple: 1.228
  }, {
    date: 'Jul 14, 2025',
    close: '119,849.70',
    mayerMultiple: 1.234
  }, {
    date: 'Jul 15, 2025',
    close: '117,752.43',
    mayerMultiple: 1.211
  }];
  const processedData = useMemo(() => {
    return bitcoinData.map(item => {
      const isBuyMoment = item.mayerMultiple <= 0.9;
      return {
        ...item,
        closeValue: parseFloat(item.close.replace(/,/g, '')),
        formattedDate: new Date(item.date).toLocaleDateString('pt-BR', {
          month: 'short',
          day: 'numeric'
        }),
        isBuyMoment
      };
    });
  }, [bitcoinData]);
  const buyMoments = useMemo(() => {
    return processedData.filter(item => item.isBuyMoment);
  }, [processedData]);
  const CustomTooltip = ({
    active,
    payload,
    label
  }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return <div className="bg-[#1e1145] p-3 border border-[#2d1a5a] rounded-md shadow-lg">
          <p className="text-white font-medium">{data.date}</p>
          <p className="text-gray-300">
            Preço:{' '}
            <span className="text-white font-medium">US$ {data.close}</span>
          </p>
          <p className="text-gray-300">
            Mayer Multiple:{' '}
            <span className={`font-medium ${data.isBuyMoment ? 'text-green-400' : 'text-white'}`}>
              {data.mayerMultiple.toFixed(3)}
            </span>
          </p>
          {data.isBuyMoment && <p className="text-green-400 font-medium mt-1">
              Momento de compra!
            </p>}
        </div>;
    }
    return null;
  };
  return <div className="bg-[#1e1145] rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white">Bitcoin - Último Ano</h3>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
            <span className="text-sm text-gray-400">Preço</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
            <span className="text-sm text-gray-400">
              Momento de compra (Mayer ≤ 0.9)
            </span>
          </div>
        </div>
      </div>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={processedData} margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 20
        }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2d1a5a" />
            <XAxis dataKey="formattedDate" stroke="#6b7280" tick={{
            fill: '#9ca3af',
            fontSize: 10
          }} tickFormatter={(value, index) => {
            // Show fewer ticks for better readability
            return index % 30 === 0 ? value : '';
          }} />
            <YAxis stroke="#6b7280" tick={{
            fill: '#9ca3af'
          }} domain={['dataMin - 5000', 'dataMax + 5000']} tickFormatter={value => `$${Math.round(value / 1000)}k`} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="closeValue" stroke="#3b82f6" strokeWidth={2} dot={false} activeDot={{
            r: 6,
            fill: '#3b82f6',
            stroke: '#fff'
          }} name="Preço" />
            {/* Buy moment indicators */}
            {buyMoments.map((item, index) => <ReferenceDot key={index} x={item.formattedDate} y={item.closeValue} r={5} fill="#10b981" stroke="#fff" isFront={true} />)}
            <Legend verticalAlign="top" height={36} formatter={value => {
            if (value === 'closeValue') return 'Preço';
            return value;
          }} wrapperStyle={{
            display: 'none'
          }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 p-4 bg-[#2d1a5a]/50 rounded-lg">
        <div className="flex items-start">
          <div className="bg-green-900/30 p-2 rounded-lg mr-3">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          </div>
          <div>
            <h4 className="font-medium text-white mb-1">
              Momentos de Compra Históricos
            </h4>
            <p className="text-gray-400 text-sm">
              Os pontos verdes indicam momentos em que o Mayer Multiple estava
              abaixo de 0.9, historicamente períodos ótimos para comprar
              Bitcoin.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default BitcoinChart;