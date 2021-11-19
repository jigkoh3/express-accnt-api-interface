"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dbffile_1 = require("dbffile");
function testRead() {
    return __awaiter(this, void 0, void 0, function () {
        var dbf, records, newRecords, _i, records_1, record;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dbffile_1.DBFFile.open('./../63WANN/ARMAS.DBF', { encoding: 'tis-620' })];
                case 1:
                    dbf = _a.sent();
                    console.log("DBF file contains " + dbf.recordCount + " records.");
                    console.log("Field names: " + dbf.fields.map(function (f) { return f.name; }).join(', '));
                    return [4 /*yield*/, dbf.readRecords(300)];
                case 2:
                    records = _a.sent();
                    newRecords = [
                        {
                            CUSCOD: '601ZZZ',
                            CUSTYP: '00',
                            PRENAM: '����ѷ',
                            CUSNAM: '�� �͹�� �� �������� �ӡѴ',
                            ADDR01: '475��.������2��.43��.������2',
                            ADDR02: '�ǧ�ҧ���ࢵ����ͧ',
                            ADDR03: '��ا෾��ҹ��',
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
                            PAYCOND: '�Ѵ��60%��ѹ��觫�������',
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
                    for (_i = 0, records_1 = records; _i < records_1.length; _i++) {
                        record = records_1[_i];
                        console.log(record);
                    }
                    return [2 /*return*/];
            }
        });
    });
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
