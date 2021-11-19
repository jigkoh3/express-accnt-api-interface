import { DBFFile } from 'dbffile';

async function testRead() {
    let dbf = await DBFFile.open('./../63WANN/ARMAS.DBF', { encoding: 'tis-620' });
    console.log(`DBF file contains ${dbf.recordCount} records.`);
    console.log(`Field names: ${dbf.fields.map(f => f.name).join(', ')}`);
    let records = await dbf.readRecords(300);

    let newRecords = [
        {
            CUSCOD: '601ZZZ',
            CUSTYP: '00',
            PRENAM: 'บริษัท',
            CUSNAM: 'เอ แอนด์ พี บราเธอร์ส จำกัด',
            ADDR01: '475ÿซ.พระราม2ÿซ.43ÿถ.พระราม2',
            ADDR02: 'แขวงบางมดÿเขตจอมทอง',
            ADDR03: 'กรุงเทพมหานคร',
            ZIPCOD: '10150',
            TELNUM: '081-840-4601',
            CONTACT: '',
            CUSNAM2: '',
            TAXID: '0105560041270',
            ORGNUM: 0,
            TAXTYP: '',
            TAXRAT: 0,
            TAXGRP: '',
            TAXCOND: '',
            SHIPTO: '',
            SLMCOD: 'MK002',
            AREACOD: '',
            PAYTRM: 0,
            PAYCOND: 'มัดจำ60%ในวันสั่งซื้อÿชำร',
            PAYER: '',
            TABPR: '0',
            DISC: '',
            BALANCE: 0,
            CHQRCV: 0,
            CRLINE: 0,
            LASIVC: null,
            ACCNUM: '1130-01',
            REMARK: '',
            DLVBY: '',
            TRACKSAL: '',
            CREBY: '',
            CREDAT: null,
            USERID: 'ACC03',
            STATUS: '',
            INACTDAT: null
          }
    ];
    // await dbf.appendRecords(newRecords);
    for (let record of records) console.log(record);
}

// async function testWrite() {
//     let fieldDescriptors = [
//         { name: 'fname', type: 'C', size: 255 },
//         { name: 'lname', type: 'C', size: 255 }
//     ];

//     let records = [
//         { fname: 'Joe', lname: 'Bloggs' },
//         { fname: 'Mary', lname: 'Smith' }
//     ];

//     let dbf = await DBFFile.create('./../63WANN/TSTWANN.DBF',fieldDescriptors);
//     console.log('DBF file created.');
//     await dbf.appendRecords(records);
//     console.log(`${records.length} records added.`);
// }


testRead();