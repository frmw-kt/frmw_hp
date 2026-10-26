import FrameDraft from '@/components/FrameDraft';
export const metadata = { title: '立体フレーム・形状確認', robots: { index: false, follow: false } };
export default function FrameStudy() {
 return <main style={{background:'#090b0d',color:'#eee',minHeight:'100svh',padding:'28px'}}>
 <p style={{fontSize:12,letterSpacing:2,color:'#c8b888'}}>FRAMEWORK / 3D FORM STUDY</p>
 <h1 style={{fontSize:24,fontWeight:500}}>2つのフレームが重なる、静止ラフ</h1>
 <p style={{fontSize:13,color:'#aaa'}}>黒金属＋淡いゴールドの縁。形状確認用・生成クレジット未使用。</p>
 <a href="/?hero=frame-draft" style={{display:'inline-block',marginTop:16,color:'#eee'}}>実際のトップFVに重ねて見る ↗</a>
 <div style={{position:'relative',height:'65svh',minHeight:380,marginTop:20}}><FrameDraft isolated /></div>
 </main>;
}
