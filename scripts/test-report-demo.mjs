import test from 'node:test';
import assert from 'node:assert/strict';
import { aggregateReport, sampleRows } from '../src/lib/report-demo.mjs';

test('別ファイル由来の明細を部署ごとに集計し、元データを変えない', () => {
  const original = structuredClone(sampleRows);
  assert.deepEqual(aggregateReport(sampleRows), [{team: '営業A', amount: 200000}, {team: '営業B', amount: 150000}]);
  assert.deepEqual(sampleRows, original);
});
test('入力不足・不正金額では結果を返さない', () => {
  for (const row of [{id:'',team:'営業A',amount:1}, {id:'X',team:' ',amount:1}, {id:'X',team:'A',amount:NaN}, {id:'X',team:'A',amount:-1}]) {
    assert.throws(() => aggregateReport([...sampleRows,row]), /入力不足/);
  }
});
test('前後空白のある同一IDも二重集計しない', () => {
  assert.throws(() => aggregateReport([...sampleRows, {...sampleRows[0], id:' A-001 '}]), /重複/);
});
test('連携失敗で停止し、その後の再試行は正常に完了する', () => {
  assert.throws(() => aggregateReport(sampleRows, false), /手作業/);
  assert.equal(aggregateReport(sampleRows).length, 2);
});
test('ゼロ円と空明細を正しく扱う', () => {
  assert.deepEqual(aggregateReport([]), []);
  assert.deepEqual(aggregateReport([{id:'zero',team:'営業A',amount:0}]), [{team:'営業A',amount:0}]);
});
