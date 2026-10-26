import s from './programming.module.css';

// Six fixed axes for every course. Scores describe editorial criteria, not outcomes.
type Score = 1 | 2 | 3 | 4 | 5;
type Six<T> = [T, T, T, T, T, T];
const axes: Six<string> = ['費用の抑えやすさ', '短期での学習', '個別指導', '制作・開発実践', '就職・転職支援', '通学の選択肢'];
const profiles: Record<string, { values: Six<Score>; notes: Six<string> }> = {
  'programmer-college': { values: [5, 5, 4, 5, 5, 1], notes: ['受講料0円。受講・就職活動の条件あり', '最短60日で就職を目指す案内', '講師にマンツーマンで質問できる体制', 'ECサイト・アプリを開発するカリキュラム', '就職支援を含むコース', 'オンライン形式'] },
  ninjacode: { values: [4, 3, 4, 4, 1, 1], notes: ['掲載受講料488,000円〜', '動画での自習型・無期限サポート。固定の修了期限を設けない形式として3（3ヶ月で修了という意味ではありません）', 'メンタリング・チャット対応', '動画教材に加えて実践課題', '掲載は副業・案件獲得保証プラン。就職向けの求人紹介・応募支援は別の転職支援プランで案内されるため、掲載プランでは1', 'オンライン形式'] },
  potepan: { values: [5, 5, 4, 5, 5, 1], notes: ['U29の受講料0円。29歳以下など条件あり', '3ヶ月の学習', 'メンターによるコードレビュー', 'ポートフォリオ制作', '転職サポートあり', 'オンライン形式'] },
  winschool: { values: [5, 5, 5, 2, 5, 5], notes: ['掲載総額242,000円', '3ヶ月の講座', '講師による個別指導', 'Pythonの基本文法から応用を学習', '受講生・卒業生向けに提携エージェントの求人紹介・書類添削・面接支援。利用には登録等の条件あり', '通学・オンラインを選択可能'] },
  codecamp: { values: [3, 4, 5, 5, 5, 1], notes: ['入学金込み594,000円', '4ヶ月のコース', '現役エンジニアの個別レッスン', 'チーム開発・ポートフォリオ制作', '応募書類・面接準備を支援', 'オンライン形式'] },
  runteq: { values: [3, 3, 4, 5, 5, 1], notes: ['Web開発・転職向け657,000円', '9ヶ月・約1,000時間', 'キャリアアドバイザーの支援', 'オリジナルWebアプリ制作', 'キャリア支援あり', 'オンライン形式'] },
  raretech: { values: [1, 1, 4, 5, 5, 1], notes: ['2年プラン1,320,000円', '2年間の長期学習', 'メンターへの質問・相談', 'ハッカソンでチーム開発', '転職支援・キャリア相談', 'オンライン形式'] },
  'internet-academy': { values: [5, 5, 5, 4, 5, 5], notes: ['入門コース受講料272,360円', '1〜3ヶ月・12回', 'マンツーマン授業・質問対応・作品のチェック', 'Web制作の基礎・制作サポート', '受講生・卒業生向けの求人情報、履歴書作成・キャリア相談。人材サービスには別途登録等の条件あり', '通学・オンラインを併用可能'] },
};
const additionalSources: Record<string, { label: string; url: string }[]> = {
  'programmer-college': [
    { label: '講師の質問対応', url: 'https://programmercollege.jp/column/43015/' },
    { label: '開発カリキュラム', url: 'https://programmercollege.jp/course/programmer/' },
  ],
  ninjacode: [
    { label: '副業プランの学習・支援内容', url: 'https://ninjacode.work/courses/web/jobsupport' },
    { label: '別プランの転職支援内容', url: 'https://ninjacode.work/careersupport' },
  ],
  winschool: [{ label: '受講生・卒業生向け就職サポート', url: 'https://www.winschool.jp/career_support/' }],
  'internet-academy': [{ label: '個別授業・キャリアサポート', url: 'https://www.internetacademy.jp/support/' }],
};
function point(index: number, radius: number, count = 6) {
  const angle = (index * 360 / count - 90) * Math.PI / 180;
  return [180 + Math.cos(angle) * radius, 155 + Math.sin(angle) * radius];
}
function ring(radius: number, count: number) { return Array.from({ length: count }, (_, i) => point(i, radius, count).join(',')).join(' '); }
export default function SchoolProfile({ id, name }: { id: string; name: string }) {
  const profile = profiles[id];
  if (!profile) return null;
  const entries = axes.map((axis, i) => ({ axis, value: profile.values[i], note: profile.notes[i] }));
  const count = entries.length;
  const titleId = `profile-${id}`;
  return <section className={s.schoolProfile} aria-labelledby={titleId}><div className={s.profileTitle}><span>COURSE PROFILE</span><h4 id={titleId}>コースの特徴を5段階でチェック</h4></div><div className={s.profileBody}><svg viewBox="0 0 360 310" role="img" aria-label={`${name}のコース特徴。数値と根拠は下の一覧を参照。`}>
    {[1, 2, 3, 4, 5].map(level => <polygon key={level} points={ring(level * 19.2, count)} fill={level === 1 ? '#edf2ff' : 'none'} stroke="#d6dfef" />)}
    {entries.map((entry, i) => { const [x, y] = point(i, 96, count); return <line key={entry.axis} x1="180" y1="155" x2={x} y2={y} stroke="#d6dfef" />; })}
    <polygon points={entries.map((entry, i) => point(i, entry.value * 19.2, count).join(',')).join(' ')} fill="#3154e822" stroke="#3154e8" strokeWidth="2.5" />
    {entries.map((entry, i) => { const [x, y] = point(i, entry.value * 19.2, count); const [tx, ty] = point(i, 126, count); return <g key={entry.axis}><circle cx={x} cy={y} r="4.5" fill="#3154e8" stroke="white" strokeWidth="2" /><text x={tx} y={ty - 3} textAnchor="middle" fill="#263858" fontSize="11" fontWeight="700">{entry.axis}</text><text x={tx} y={ty + 13} textAnchor="middle" fill="#63728c" fontSize="10">{entry.value} / 5</text></g>; })}
  </svg><div><p className={s.profileNote}>掲載コースの特徴を編集部の基準で整理。面積は品質・満足度・成果の順位を示しません。</p><ul className={s.profileScores}>{entries.map(entry => <li key={entry.axis}><span>{entry.axis}</span><b>{entry.value} / 5</b></li>)}</ul></div></div><details className={s.profileEvidence}><summary>数値の根拠・見方を確認する</summary><ul>{entries.map(entry => <li key={entry.axis}><strong>{entry.axis}：</strong>{entry.note}</li>)}</ul><p>全校共通の6項目・5段階です。費用：30万円以下＝5、50万円以下＝4、70万円以下＝3、100万円以下＝2、超＝1（掲載額・給付金適用前）。短期学習：3ヶ月以内＝5、6ヶ月以内＝4、9ヶ月以内＝3、1年以内＝2、超＝1。固定期間のない自習型は3として区別し、修了期間を推定していません。個別指導：個別レッスン＝5、個別の質問・レビュー・相談＝4。実践：作品・チーム開発＝5、実践課題・制作支援＝4、基礎〜応用学習＝2。就職支援：掲載コースまたは受講生向けの応募・求人支援＝5、別プランの提供＝1。通学：選択可能＝5、オンライン専用＝1。該当する基準の値を使用するため、全ての点数が各軸に登場するわけではありません。短期学習の数値は案内上の目安で、学習量や到達水準は異なります。長期学習や高価格が不適切という意味ではありません。</p><p>情報の出典はカード内の「対象条件・費用の詳細」から確認できます。最新の提供範囲は各校へご確認ください。</p>{additionalSources[id] && <ul>{additionalSources[id].map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}（公式） ↗</a></li>)}</ul>}</details></section>;
}
