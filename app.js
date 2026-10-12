const KEY="gymtrack_v3_data";
const defaultExercises=[
 {id:"bench",name:"Press de banca",muscle:"Pecho",sets:3,reps:10,rest:90,guide:"Acuéstate con los pies firmes. Baja la barra de forma controlada hacia la parte media del pecho y empuja sin rebotar.",mistakes:"No rebotes la barra, no abras excesivamente los codos y mantén los pies estables.",favorite:false},
 {id:"incline",name:"Press inclinado con mancuernas",muscle:"Pecho",sets:3,reps:10,rest:75,guide:"Banco inclinado, mancuernas a la altura del pecho. Empuja hacia arriba y junta ligeramente las mancuernas.",mistakes:"Evita bajar demasiado si pierdes control del hombro.",favorite:false},
 {id:"row",name:"Remo con mancuerna",muscle:"Espalda",sets:3,reps:10,rest:75,guide:"Apoya una mano y mantén la espalda neutra. Lleva la mancuerna hacia la cadera.",mistakes:"No gires el torso ni uses impulso.",favorite:false},
 {id:"pulldown",name:"Jalón al pecho",muscle:"Espalda",sets:3,reps:10,rest:75,guide:"Agarra la barra, pecho arriba y tira hacia la parte alta del pecho.",mistakes:"No tires detrás de la nuca ni balancees el cuerpo.",favorite:false},
 {id:"squat",name:"Sentadilla",muscle:"Piernas",sets:3,reps:8,rest:120,guide:"Pies firmes, pecho estable y rodillas siguiendo la dirección de los pies. Baja con control y sube empujando el suelo.",mistakes:"Evita perder el control o colapsar las rodillas hacia dentro.",favorite:false},
 {id:"rdl",name:"Peso muerto rumano",muscle:"Piernas",sets:3,reps:10,rest:105,guide:"Lleva la cadera hacia atrás manteniendo la espalda neutra y las pesas cerca del cuerpo.",mistakes:"No redondees la espalda ni conviertas el movimiento en una sentadilla.",favorite:false},
 {id:"ohp",name:"Press de hombros",muscle:"Hombros",sets:3,reps:10,rest:75,guide:"Empuja las mancuernas desde los hombros hacia arriba manteniendo el tronco estable.",mistakes:"No arquees exageradamente la zona lumbar.",favorite:false},
 {id:"curl",name:"Curl de bíceps",muscle:"Bíceps",sets:3,reps:12,rest:60,guide:"Codos cerca del cuerpo. Flexiona el codo sin balancearte.",mistakes:"No uses impulso del torso.",favorite:false},
 {id:"pushdown",name:"Extensión de tríceps",muscle:"Tríceps",sets:3,reps:12,rest:60,guide:"Codos junto al cuerpo y extiende el antebrazo hacia abajo.",mistakes:"No abras los codos ni balancees el torso.",favorite:false},
 {id:"plank",name:"Plancha",muscle:"Core",sets:3,reps:30,rest:45,guide:"Mantén cuerpo alineado y abdomen activo. En este ejercicio las repeticiones representan segundos.",mistakes:"No hundas la espalda ni levantes demasiado la cadera.",favorite:false}
];

// Catálogo ampliado: cada ejercicio incluye objetivos y equipo para que el plan automático
// pueda seleccionar movimientos diferentes según la meta del usuario.
const extraExercises = [
 {id:"deadlift",name:"Peso muerto convencional",muscle:"Espalda y piernas",sets:3,reps:5,rest:150,goals:["Ganar fuerza","Ganar músculo"],equipment:"Barra",guide:"Pies bajo la barra, espalda neutra, toma la barra y empuja el suelo mientras la cadera y el pecho suben juntos.",mistakes:"No redondees la espalda ni alejes la barra del cuerpo."},
 {id:"legpress",name:"Prensa de piernas",muscle:"Piernas",sets:3,reps:10,rest:120,goals:["Ganar músculo","Rebajar peso","Definir","Condición física"],equipment:"Máquina",guide:"Apoya toda la espalda, coloca los pies firmes y baja la plataforma con control antes de empujar.",mistakes:"No bloquees las rodillas ni bajes hasta perder la posición de la pelvis."},
 {id:"legcurl",name:"Curl femoral",muscle:"Femoral",sets:3,reps:12,rest:75,goals:["Ganar músculo","Definir"],equipment:"Máquina",guide:"Alinea la rodilla con el eje de la máquina y flexiona llevando los talones hacia los glúteos.",mistakes:"No levantes la cadera ni uses impulso."},
 {id:"legext",name:"Extensión de piernas",muscle:"Cuádriceps",sets:3,reps:12,rest:60,goals:["Ganar músculo","Definir"],equipment:"Máquina",guide:"Ajusta el respaldo y extiende las rodillas de forma controlada hasta una posición cómoda.",mistakes:"No golpees el peso ni bloquees con violencia."},
 {id:"calf",name:"Elevación de pantorrillas",muscle:"Pantorrillas",sets:4,reps:15,rest:60,goals:["Ganar músculo","Condición física"],equipment:"Máquina",guide:"Sube los talones todo lo posible y baja lentamente para aprovechar el recorrido.",mistakes:"No rebotes ni hagas repeticiones muy rápidas."},
 {id:"bulgarian",name:"Sentadilla búlgara",muscle:"Piernas y glúteos",sets:3,reps:10,rest:90,goals:["Ganar músculo","Definir","Condición física"],equipment:"Mancuernas",guide:"Coloca el pie trasero elevado, baja la cadera con el torso estable y empuja con la pierna delantera.",mistakes:"No dejes que la rodilla se colapse hacia dentro."},
 {id:"hipthrust",name:"Hip thrust",muscle:"Glúteos",sets:4,reps:10,rest:90,goals:["Ganar músculo","Definir"],equipment:"Barra",guide:"Apoya la parte alta de la espalda, lleva la cadera arriba y aprieta los glúteos al final.",mistakes:"No hiperextiendas la espalda baja."},
 {id:"lunge",name:"Zancadas caminando",muscle:"Piernas y glúteos",sets:3,reps:12,rest:90,goals:["Rebajar peso","Definir","Condición física"],equipment:"Mancuernas",guide:"Da un paso, baja de forma controlada y vuelve a subir manteniendo el tronco estable.",mistakes:"Evita pasos demasiado cortos y perder el equilibrio."},
 {id:"stepup",name:"Step-up",muscle:"Piernas y glúteos",sets:3,reps:10,rest:75,goals:["Rebajar peso","Condición física","Definir"],equipment:"Banco",guide:"Sube al banco empujando con la pierna que está arriba y baja con control.",mistakes:"No te impulses excesivamente con la pierna de abajo."},
 {id:"goblet",name:"Sentadilla goblet",muscle:"Piernas",sets:3,reps:12,rest:75,goals:["Principiante","Rebajar peso","Condición física"],equipment:"Mancuerna",guide:"Sostén una mancuerna frente al pecho, baja manteniendo el torso estable y vuelve a subir.",mistakes:"No juntes las rodillas ni pierdas el control."},
 {id:"latrow",name:"Remo sentado en polea",muscle:"Espalda",sets:3,reps:10,rest:75,goals:["Ganar músculo","Ganar fuerza"],equipment:"Polea",guide:"Siéntate alto, tira del agarre hacia el torso y junta los omóplatos sin balancearte.",mistakes:"No redondees la espalda ni uses impulso."},
 {id:"tbar",name:"Remo T",muscle:"Espalda",sets:3,reps:8,rest:105,goals:["Ganar fuerza","Ganar músculo"],equipment:"Barra",guide:"Mantén el torso inclinado y lleva la carga hacia el abdomen con control.",mistakes:"No conviertas el movimiento en un tirón con la zona lumbar."},
 {id:"pullup",name:"Dominadas",muscle:"Espalda y bíceps",sets:3,reps:6,rest:120,goals:["Ganar fuerza","Ganar músculo"],equipment:"Barra",guide:"Inicia colgado con el cuerpo estable y lleva el pecho hacia la barra manteniendo el control.",mistakes:"No balancees el cuerpo para completar la repetición."},
 {id:"assistedpullup",name:"Dominadas asistidas",muscle:"Espalda y bíceps",sets:3,reps:8,rest:90,goals:["Principiante","Ganar músculo","Condición física"],equipment:"Máquina",guide:"Ajusta la asistencia, inicia con el cuerpo estable y tira hacia arriba de forma controlada.",mistakes:"No rebotes sobre la plataforma."},
 {id:"facepull",name:"Face pull",muscle:"Hombros posteriores",sets:3,reps:15,rest:60,goals:["Condición física","Ganar músculo"],equipment:"Polea",guide:"Tira de la cuerda hacia la cara separando las manos y manteniendo los hombros controlados.",mistakes:"No eleves los hombros hacia las orejas."},
 {id:"latraise",name:"Elevaciones laterales",muscle:"Hombros",sets:3,reps:15,rest:60,goals:["Ganar músculo","Definir"],equipment:"Mancuernas",guide:"Eleva los brazos lateralmente hasta una altura cómoda y baja lentamente.",mistakes:"No uses balanceo del torso ni encogimientos."},
 {id:"rearDelt",name:"Pájaros con mancuernas",muscle:"Hombros posteriores",sets:3,reps:15,rest:60,goals:["Ganar músculo","Definir"],equipment:"Mancuernas",guide:"Inclina el torso, abre los brazos y controla el regreso juntando las escápulas suavemente.",mistakes:"No conviertas el ejercicio en un tirón con impulso."},
 {id:"dip",name:"Fondos en paralelas",muscle:"Pecho y tríceps",sets:3,reps:8,rest:90,goals:["Ganar fuerza","Ganar músculo"],equipment:"Paralelas",guide:"Baja con control manteniendo los hombros estables y empuja para volver arriba.",mistakes:"No bajes más allá del rango que puedes controlar."},
 {id:"cablefly",name:"Aperturas en polea",muscle:"Pecho",sets:3,reps:12,rest:60,goals:["Ganar músculo","Definir"],equipment:"Polea",guide:"Mantén una ligera flexión de codos y acerca las manos delante del pecho sin perder tensión.",mistakes:"No conviertas el movimiento en un press."},
 {id:"chestpress",name:"Press de pecho en máquina",muscle:"Pecho",sets:3,reps:10,rest:75,goals:["Principiante","Ganar músculo","Definir"],equipment:"Máquina",guide:"Ajusta el asiento, retrae suavemente los hombros y empuja las manijas de forma controlada.",mistakes:"No despegues la espalda del respaldo."},
 {id:"inclinebar",name:"Press inclinado con barra",muscle:"Pecho superior",sets:3,reps:8,rest:105,goals:["Ganar fuerza","Ganar músculo"],equipment:"Barra",guide:"Usa un banco con inclinación moderada, baja la barra con control y empuja verticalmente.",mistakes:"No rebotes la barra ni abras excesivamente los codos."},
 {id:"hammer",name:"Curl martillo",muscle:"Bíceps y antebrazo",sets:3,reps:12,rest:60,goals:["Ganar músculo","Definir"],equipment:"Mancuernas",guide:"Mantén las palmas enfrentadas y flexiona los codos sin mover los hombros.",mistakes:"No balancees el cuerpo."},
 {id:"preacher",name:"Curl predicador",muscle:"Bíceps",sets:3,reps:10,rest:60,goals:["Ganar músculo"],equipment:"Máquina",guide:"Apoya los brazos y flexiona el codo manteniendo tensión durante todo el recorrido.",mistakes:"No dejes caer el peso al final."},
 {id:"skull",name:"Extensión de tríceps acostado",muscle:"Tríceps",sets:3,reps:10,rest:75,goals:["Ganar músculo","Ganar fuerza"],equipment:"Barra",guide:"Mantén los brazos arriba, flexiona los codos y lleva la carga hacia la frente con control.",mistakes:"No abras los codos."},
 {id:"overheadtriceps",name:"Extensión de tríceps sobre cabeza",muscle:"Tríceps",sets:3,reps:12,rest:60,goals:["Ganar músculo","Definir"],equipment:"Mancuerna",guide:"Mantén los codos apuntando al frente y extiende el brazo sin mover excesivamente los hombros.",mistakes:"No arquees la espalda para ayudar al movimiento."},
 {id:"crunch",name:"Crunch abdominal",muscle:"Core",sets:3,reps:15,rest:45,goals:["Definir","Rebajar peso","Condición física"],equipment:"Sin equipo",guide:"Eleva los hombros mediante la contracción abdominal manteniendo el movimiento controlado.",mistakes:"No tires del cuello."},
 {id:"legraise",name:"Elevación de piernas",muscle:"Core",sets:3,reps:12,rest:45,goals:["Definir","Condición física"],equipment:"Sin equipo",guide:"Mantén el abdomen activo y eleva las piernas sin despegar bruscamente la zona lumbar.",mistakes:"No uses impulso."},
 {id:"deadbug",name:"Dead bug",muscle:"Core",sets:3,reps:10,rest:45,goals:["Principiante","Condición física"],equipment:"Sin equipo",guide:"Desde el suelo, extiende brazo y pierna contrarios manteniendo la zona lumbar estable.",mistakes:"No permitas que la espalda se arquee."},
 {id:"mountain",name:"Mountain climbers",muscle:"Core y cardio",sets:3,reps:30,rest:45,goals:["Rebajar peso","Definir","Condición física"],equipment:"Sin equipo",guide:"Desde posición de plancha lleva las rodillas alternadamente hacia el pecho manteniendo el tronco estable.",mistakes:"No rebotes ni eleves demasiado la cadera."},
 {id:"burpee",name:"Burpee",muscle:"Cuerpo completo",sets:3,reps:10,rest:60,goals:["Rebajar peso","Condición física"],equipment:"Sin equipo",guide:"Baja a una posición de apoyo, lleva los pies hacia delante y termina con una extensión controlada.",mistakes:"Adapta el ritmo y evita perder la postura por fatiga."},
 {id:"jumpingjack",name:"Jumping jacks",muscle:"Cuerpo completo",sets:3,reps:30,rest:30,goals:["Rebajar peso","Condición física"],equipment:"Sin equipo",guide:"Abre brazos y piernas de forma coordinada y vuelve al centro con aterrizajes suaves.",mistakes:"No aterrices rígidamente."},
 {id:"bike",name:"Bicicleta estática",muscle:"Cardio",sets:1,reps:20,rest:60,goals:["Rebajar peso","Condición física"],equipment:"Cardio",guide:"Ajusta el asiento y pedalea a una intensidad sostenible, manteniendo una postura cómoda.",mistakes:"No uses una resistencia que comprometa la técnica."},
 {id:"rower",name:"Remo ergómetro",muscle:"Cardio y cuerpo completo",sets:1,reps:15,rest:60,goals:["Rebajar peso","Condición física"],equipment:"Cardio",guide:"Empuja con las piernas, inclina el torso y termina tirando con los brazos; vuelve en orden inverso.",mistakes:"No redondees la espalda ni tires solo con los brazos."},
 {id:"walk",name:"Caminata inclinada",muscle:"Cardio",sets:1,reps:20,rest:30,goals:["Rebajar peso","Condición física"],equipment:"Cardio",guide:"Camina a ritmo continuo con una inclinación que puedas mantener con buena postura.",mistakes:"No te cuelgues de las barras de la caminadora."},
 {id:"pushup",name:"Flexiones",muscle:"Pecho y tríceps",sets:3,reps:10,rest:60,goals:["Principiante","Condición física","Definir"],equipment:"Sin equipo",guide:"Manos bajo o ligeramente fuera de los hombros, cuerpo en línea y baja el pecho con control.",mistakes:"No hundas la cadera ni abras demasiado los codos."},
 {id:"inclinepush",name:"Flexiones inclinadas",muscle:"Pecho y tríceps",sets:3,reps:12,rest:45,goals:["Principiante","Condición física"],equipment:"Banco",guide:"Apoya las manos en una superficie elevada y realiza flexiones manteniendo el cuerpo alineado.",mistakes:"No acerques demasiado los pies ni pierdas la línea corporal."},
 {id:"farmers",name:"Caminata del granjero",muscle:"Agarre y cuerpo completo",sets:3,reps:30,rest:75,goals:["Ganar fuerza","Condición física"],equipment:"Mancuernas",guide:"Sujeta cargas a los lados y camina con pasos cortos manteniendo el tronco alto.",mistakes:"No te inclines hacia un lado ni encorves los hombros."},
 {id:"swing",name:"Kettlebell swing",muscle:"Glúteos y cuerpo completo",sets:3,reps:15,rest:60,goals:["Condición física","Rebajar peso"],equipment:"Kettlebell",guide:"Impulsa la pesa con la cadera, no con los brazos; deja que el movimiento sea explosivo y controlado.",mistakes:"No conviertas el swing en una sentadilla profunda."},
 {id:"splitSquat",name:"Sentadilla dividida",muscle:"Piernas",sets:3,reps:10,rest:75,goals:["Principiante","Ganar músculo","Definir"],equipment:"Mancuernas",guide:"Adopta una postura escalonada, baja verticalmente y sube manteniendo estabilidad.",mistakes:"No dejes que la rodilla delantera se desplace hacia dentro."},
 {id:"cableRow",name:"Remo unilateral en polea",muscle:"Espalda",sets:3,reps:12,rest:60,goals:["Ganar músculo","Definir"],equipment:"Polea",guide:"Tira del agarre hacia la cadera manteniendo el tronco estable y controlando la vuelta.",mistakes:"No gires el torso para completar la repetición."},
 {id:"reversefly",name:"Reverse fly en máquina",muscle:"Hombros posteriores",sets:3,reps:15,rest:60,goals:["Ganar músculo","Definir"],equipment:"Máquina",guide:"Abre los brazos hasta la línea del cuerpo y regresa lentamente.",mistakes:"No uses impulso."}
];


let data=load();
data.profile=data.profile||{};
data.profile.height=data.profile.height||"";
data.profile.heightUnit=data.profile.heightUnit||"cm";data.profile.heightFeet=data.profile.heightFeet||0;data.profile.heightInches=data.profile.heightInches||0;
data.profile.defaultRest=Number(data.profile.defaultRest)||90;
data.profile.gender=data.profile.gender||"No especificar";
data.profile.theme=data.profile.theme||"verde";
function applyTheme(){
 const allowed=["verde","azul","morado","rosa","rojo","dorado","claro"];
 const theme=allowed.includes(data.profile.theme)?data.profile.theme:"verde";
 document.body.dataset.theme=theme;
 document.documentElement.style.colorScheme=theme==="claro"?"light":"dark";
}
// Migra el catálogo ampliado sin borrar ejercicios personalizados del usuario.
const existingIds=new Set((data.exercises||[]).map(e=>e.id));
extraExercises.forEach(e=>{if(!existingIds.has(e.id)) data.exercises.push({...e,favorite:false});});
const difficultyMap={
 "deadlift":"Avanzado","pullup":"Avanzado","dip":"Avanzado","tbar":"Avanzado","skull":"Intermedio","inclinebar":"Intermedio","rdl":"Intermedio","squat":"Intermedio","ohp":"Intermedio","bulgarian":"Intermedio","hipthrust":"Intermedio","latrow":"Intermedio","pulldown":"Intermedio","bench":"Intermedio","incline":"Intermedio","row":"Intermedio","legpress":"Principiante","legcurl":"Principiante","legext":"Principiante","chestpress":"Principiante","assistedpullup":"Principiante","goblet":"Principiante","pushup":"Principiante","inclinepush":"Principiante","plank":"Principiante","curl":"Principiante","pushdown":"Principiante"
};
function difficultyFor(e){return e.difficulty||difficultyMap[e.id]||((e.equipment||"")==="Máquina"?"Principiante":"Intermedio");}
data.exercises.forEach(e=>{e.goals=e.goals||["Ganar músculo","Definir","Condición física"];e.equipment=e.equipment||"General";e.difficulty=difficultyFor(e);});
save();
data.nutrition=data.nutrition||{calories:"",protein:"",water:0,meals:[]};
data.coach=data.coach||defaultCoach();
data.settings=data.settings||{weekStart:1,gymMode:false};
data.settings.gymMode=!!data.settings.gymMode;
data.scheduleOverrides=data.scheduleOverrides||{};data.photos=data.photos||[];data.weights=data.weights||[];data.sessions=data.sessions||[];data.records=data.records||{};data.calendarMarks=data.calendarMarks||{};data.recovery=data.recovery||null;
save();
let state={tab:"home", selectedRoutine:null, activeSession:null, calendarOffset:0, calendarDate:today()};

function load(){
 try{
  const x=JSON.parse(localStorage.getItem(KEY)||"null");
  if(x) return x;
 }catch(e){}
 return {
  profile:{name:"",gender:"No especificar",goal:"Ganar músculo",level:"Principiante",days:4,unit:"lb",currentWeight:"",goalWeight:"",defaultRest:90,theme:"verde"},
  routines:[],
  exercises:structuredClone(defaultExercises),
  sessions:[],
  weights:[],
  photos:[],
  notes:{},
  nutrition:{calories:"",protein:"",water:0,meals:[]},
  settings:{weekStart:1,gymMode:false},
  coach:defaultCoach(),
  records:{}
 };
}
function save(){localStorage.setItem(KEY,JSON.stringify(data));}
function roundUnit(v, unit){const n=Number(v); if(!Number.isFinite(n)) return v; return unit==="kg"?Math.round(n*100)/100:Math.round(n*10)/10;}
function convertWeightValue(v, from, to){if(v===""||v===null||v===undefined)return v; const n=Number(v); if(!Number.isFinite(n)||from===to)return v; const out=from==="lb"&&to==="kg"?n/2.20462:n*2.20462; return roundUnit(out,to);}
function convertAllWeights(from,to){
 if(!from||!to||from===to)return;
 data.profile.currentWeight=convertWeightValue(data.profile.currentWeight,from,to);
 data.profile.goalWeight=convertWeightValue(data.profile.goalWeight,from,to);
 (data.weights||[]).forEach(x=>x.weight=convertWeightValue(x.weight,from,to));
 (data.sessions||[]).forEach(s=>(s.sets||[]).forEach(x=>{x.weight=convertWeightValue(x.weight,from,to);}));
 Object.values(data.records||{}).forEach(x=>{x.weight=convertWeightValue(x.weight,from,to);});
}
function defaultCoach(){return {measurements:[],nutritionLog:[],recoveryLog:[],achievements:[],settings:{rir:2}};}
function coachState(){
 try{
  if(!data.coach) data.coach=defaultCoach();
  // Migrate older v12 coach data once, without keeping a second source of truth.
  if(!data.coach.__migrated){
   const legacy=JSON.parse(localStorage.getItem('gymtrack_coach_v2')||'null');
   if(legacy) data.coach=Object.assign(defaultCoach(),legacy);
   data.coach.__migrated=true; save();
  }
  return data.coach;
 }catch(e){ if(!data.coach) data.coach=defaultCoach(); return data.coach; }
}
function buildBackup(){return {format:'GymTrack Backup',version:16.1,exportedAt:new Date().toISOString(),data:JSON.parse(JSON.stringify(data))};}
function validBackup(x){const d=x?.data||x; return !!(d&&d.profile&&Array.isArray(d.exercises)&&Array.isArray(d.routines)&&Array.isArray(d.sessions));}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}
function toast(s){const t=document.getElementById("toast");t.textContent=s;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800);}
function today(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;}
function fmtDate(d){return new Date(d+"T12:00:00").toLocaleDateString("es-US",{month:"short",day:"numeric"});}
function uid(p="id"){return p+"_"+Math.random().toString(36).slice(2,9)+Date.now().toString(36);}
function exerciseById(id){return data.exercises.find(x=>x.id===id);}
function lastExercise(exId){
 for(let i=data.sessions.length-1;i>=0;i--){
  const s=data.sessions[i], sets=s.sets?.filter(x=>x.exerciseId===exId&&Number(x.weight)>0);
  if(sets?.length) return sets;
 }
 return [];
}
function suggest(exId){
 const ex=exerciseById(exId), last=lastExercise(exId);
 if(!last.length) return {weight:"",reps:ex?.reps||10,text:"Empieza con un peso cómodo y registra el resultado."};
 const usable=last.filter(x=>Number.isFinite(Number(x.weight)) && Number(x.weight)>0);
 if(!usable.length) return {weight:"",reps:ex?.reps||10,text:"Registra peso, repeticiones y RIR para obtener una progresión personalizada."};
 const best=Math.max(...usable.map(x=>Number(x.weight)||0));
 const avgReps=Math.round(usable.reduce((a,x)=>a+(Number(x.reps)||0),0)/usable.length);
 const rirs=usable.filter(x=>x.rir!==''&&x.rir!==undefined&&x.rir!==null).map(x=>Number(x.rir)).filter(Number.isFinite);
 const avgRir=rirs.length?rirs.reduce((a,x)=>a+x,0)/rirs.length:null;
 const recovery=coachState().recoveryLog?.slice(-1)[0];
 const recoveryScore=Number(recovery?.score);
 const target=Number(ex?.reps||10);
 let w=best, r=Math.min(target,Math.max(1,avgReps+1)), action='Mantén la carga e intenta mejorar 1 repetición.';
 const eq=(ex?.equipment||'').toLowerCase(), name=(ex?.name||'').toLowerCase();
 const increment=(()=>{
   if(eq.includes('mancuerna')) return data.profile.unit==='kg'?1:2.5;
   if(eq.includes('cable')||eq.includes('máquina')||eq.includes('machine')) return data.profile.unit==='kg'?2.5:5;
   if(name.includes('lateral')||name.includes('curl')||name.includes('extension')||name.includes('elevación')) return data.profile.unit==='kg'?1:2.5;
   return data.profile.unit==='kg'?2.5:5;
 })();
 const recent=[]; for(let i=data.sessions.length-1;i>=0&&recent.length<4;i--){const rr=(data.sessions[i].sets||[]).filter(x=>x.exerciseId===exId&&Number(x.weight)>0&&Number(x.reps)>0);if(rr.length)recent.push(rr);}
 const plateau=recent.length>=3 && recent.every(rr=>Math.max(...rr.map(x=>estimate1RM(Number(x.weight),Number(x.reps))))<=best*(1.02));
 if(recoveryScore && recoveryScore<60){r=Math.min(target,Math.max(1,avgReps));action='Recuperación baja: mantén la carga y prioriza técnica; no fuerces una subida hoy.';}
 else if(plateau){w=best;r=Math.min(target,Math.max(1,avgReps+1));action='Posible estancamiento: mantén la carga, busca 1 repetición extra y revisa recuperación antes de subir.';}
 else if(avgReps>=target && (avgRir===null||avgRir<=2)){w=best+increment;r=target;action=`Sube aproximadamente ${increment} ${data.profile.unit} si mantienes la técnica.`;}
 else if(avgRir!==null && avgRir>=4 && avgReps<target){w=Math.max(0,best-increment);r=Math.min(target,Math.max(1,avgReps+1));action=`Reduce aproximadamente ${increment} ${data.profile.unit} y trabaja hacia el rango objetivo.`;}
 const rirText=avgRir===null?'RIR no registrado':`RIR medio ${avgRir.toFixed(1)}`;
 return {weight:w?String(roundUnit(w,data.profile.unit)):"",reps:r,text:`Última sesión: ${best} ${data.profile.unit} × promedio ${avgReps} · ${rirText}. ${action}`,increment,plateau};
}

function dateFromISO(iso){return new Date(iso+"T12:00:00");}
function addDaysISO(iso,n){const d=dateFromISO(iso);d.setDate(d.getDate()+n);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;}
function defaultRoutineForDate(iso){const d=dateFromISO(iso);const idx=(d.getDay()+6)%7;return data.routines.find(r=>Number(r.day)===idx)||null;}
function routineForDate(iso){
 const overrides=data.scheduleOverrides||{};
 if(Object.prototype.hasOwnProperty.call(overrides,iso)) return data.routines.find(r=>r.id===overrides[iso])||null;
 return defaultRoutineForDate(iso);
}
function routineForToday(){return routineForDate(today());}
function openWorkoutPicker(){
 if(!data.routines.length){toast("Primero crea o genera un plan");state.tab="plan";render();return;}
 const current=routineForToday();
 openModal(`<h2>Elegir entrenamiento</h2><p class="muted">Puedes hacer hoy cualquier rutina, aunque esté asignada a otro día. Si reemplazas el entrenamiento previsto para hoy, lo reubicaremos en el próximo día libre y evitaremos duplicar la rutina elegida.</p><label class="label" for="pickWorkout">Entrenamiento para hoy · ${fmtDate(today())}</label><select class="select" id="pickWorkout">${data.routines.map(r=>`<option value="${esc(r.id)}" ${r.id===current?.id?"selected":""}>${esc(r.name)} · ${r.exercises.length} ejercicios</option>`).join("")}</select><div class="row" style="margin-top:14px"><button class="btn" id="cancelModal">Cancelar</button><button class="btn primary" id="applyWorkoutToday">Usar hoy</button></div>`);
}
function applyWorkoutToday(routineId){
 const chosen=data.routines.find(r=>r.id===routineId);if(!chosen)return;
 data.scheduleOverrides=data.scheduleOverrides||{};
 const iso=today(), displaced=routineForDate(iso);
 // Remove the selected routine from its next scheduled occurrence, preventing duplicates.
 if(!displaced || displaced.id!==chosen.id){for(let i=1;i<=7;i++){const d=addDaysISO(iso,i);if(defaultRoutineForDate(d)?.id===chosen.id && !Object.prototype.hasOwnProperty.call(data.scheduleOverrides,d)){data.scheduleOverrides[d]=null;break;}}}
 data.scheduleOverrides[iso]=chosen.id;
 // Keep today's displaced workout by moving it to the next genuinely free day, without overwriting another workout.
 if(displaced && displaced.id!==chosen.id){
  let moved=false;
  for(let i=1;i<=14;i++){const d=addDaysISO(iso,i);if(!routineForDate(d)){data.scheduleOverrides[d]=displaced.id;moved=true;break;}}
  if(!moved){const d=addDaysISO(iso,1);data.scheduleOverrides[d]=displaced.id;}
 }
 save();closeModal();state.tab="home";render();toast(displaced&&displaced.id!==chosen.id?`Hoy: ${chosen.name}. ${displaced.name} reubicado.`:`Entrenamiento de hoy: ${chosen.name}`);
}
function bindModalButtons(){
 const c=document.getElementById("cancelModal");
 if(c)c.onclick=closeModal;
}
const _openModal=openModal;
openModal=function(html){_openModal(html);bindModalButtons();};
function render(){
 document.querySelectorAll(".navbtn").forEach(b=>b.classList.toggle("active",b.dataset.tab===state.tab));
 const main=document.getElementById("main");
 if(state.tab==="home") main.innerHTML=home();
 if(state.tab==="plan") main.innerHTML=plan();
 if(state.tab==="train") main.innerHTML=train();
 if(state.tab==="progress") main.innerHTML=progress();
 if(state.tab==="more") main.innerHTML=more();
 bind();
}
function latestRecovery(){
 const r=data.recovery||coachState().recoveryLog?.slice(-1)[0];
 return r&&Number.isFinite(Number(r.score))?r:null;
}
function coachBrief(){
 const r=latestRecovery();
 const recent=data.sessions.slice(-4);
 const last=recent[recent.length-1];
 const scores=recent.flatMap(s=>(s.sets||[]).map(x=>Number(x.rir))).filter(Number.isFinite);
 const avgRir=scores.length?scores.reduce((a,b)=>a+b,0)/scores.length:null;
 let title="Listo para entrenar", msg="Completa tu sesión y registra peso, reps y RIR para que Coach aprenda de ti.",tone="good";
 if(r&&r.score<60){title="Recuperación baja";msg="Hoy prioriza técnica y control. Coach recomienda mantener cargas y evitar perseguir PR si te sientes fatigado.";tone="warn";}
 else if(r&&r.score<75){title="Recuperación moderada";msg="Puedes entrenar, pero deja 2–3 RIR en las series difíciles y ajusta la carga si la técnica empeora.";tone="mid";}
 else if(avgRir!==null&&avgRir<1.5&&recent.length>=3){title="Carga acumulada alta";msg="Tus últimas sesiones están cerca del fallo. Si el rendimiento baja, considera una sesión más ligera o un día de recuperación.";tone="warn";}
 else if(last){title="Siguiente paso";msg="Coach usará tu última sesión para ajustar peso, repeticiones y RIR en el próximo entrenamiento.";}
 return `<div class="coach-brief ${tone}"><div><span class="eyebrow">COACH HOY</span><h3>${title}</h3><p>${msg}</p></div><div class="coach-brief-score">${r?Math.round(r.score):"—"}<small>${r?"/100":"RIR"}</small></div></div>`;
}
function home(){
 const r=routineForToday(), total=data.sessions.length, streak=calcStreak();
 const done=r?data.sessions.some(s=>s.date===today()&&s.routineId===r.id):false;
 return `<div class="hero"><span class="pill">${esc(data.profile.goal)}</span><h1>Hola${data.profile.name?" "+esc(data.profile.name):""} 👋</h1><p>Tu entrenamiento de hoy y todo tu progreso en un solo lugar.</p><div class="row" style="margin-top:14px"><button class="btn primary" id="startToday">${done?"Ver entrenamiento":"Comenzar entrenamiento"}</button><button class="btn" id="goPlan">Ver plan</button><button class="btn" id="chooseWorkoutToday">Cambiar rutina</button></div></div>
 <div class="grid"><div class="card"><div class="kpi">Entrenamientos</div><div class="big">${total}</div></div><div class="card"><div class="kpi">Racha</div><div class="big green">${streak} 🔥</div></div><div class="card"><div class="kpi">Peso actual</div><div class="big">${data.profile.currentWeight||"—"} <small>${data.profile.currentWeight?data.profile.unit:""}</small></div></div><div class="card"><div class="kpi">Récords</div><div class="big">${Object.keys(data.records).length}</div></div></div>
 <h2 class="sectiontitle">Coach</h2>${coachBrief()}${r?`<div class="card"><div class="between"><div><span class="pill">HOY</span><h3>${esc(r.name)}</h3><div class="muted">${r.exercises.length} ejercicios · ~${r.exercises.reduce((a,id)=>a+(exerciseById(id)?.sets||3)*2,0)} min</div></div><button class="btn small" id="startToday2">Entrenar</button><button class="btn small" id="chooseWorkoutToday2">Cambiar</button></div>${r.exercises.slice(0,3).map(id=>{let e=exerciseById(id);return `<div class="listitem"><b>${esc(e?.name||"Ejercicio")}</b><div class="muted">${e?.sets} × ${e?.reps} · descanso ${e?.rest}s</div></div>`}).join("")}</div>`:`<div class="card empty">Aún no tienes un plan. Crea uno desde Plan.</div>`}
 <h2 class="sectiontitle">Esta semana</h2><div class="card">${weekSummary()}</div>`;
}
function calendarPanel(date){
 const mark=data.calendarMarks[date]||"";
 const done=data.sessions.some(s=>s.date===date);
 const effective=done?"work":mark;
 const label=effective==="work"?"Entrenaste":effective==="miss"?"Faltaste":effective==="rest"?"Descanso":"Sin registrar";
 return `<div class="calendar-panel" id="calendarPanel">
   <div class="between"><div><b>${fmtDate(date)}</b><div class="muted">${label}</div></div><span class="calendar-status ${effective||"none"}">${effective==="work"?"✓":effective==="miss"?"×":effective==="rest"?"—":"•"}</span></div>
   <div class="calendar-actions">
    <button class="btn ${effective==="work"?"primary":""}" data-cal-action="work">✓ Entrené</button>
    <button class="btn ${effective==="miss"?"primary":""}" data-cal-action="miss">✕ Falté</button>
    <button class="btn ${effective==="rest"?"primary":""}" data-cal-action="rest">◼ Descanso</button>
    <button class="btn danger" data-cal-action="clear">Quitar</button>
   </div>
 </div>`;
}
function weekSummary(){
 const days=["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"];
 const base=new Date(); base.setHours(12,0,0,0);
 const day=base.getDay(); const mondayShift=(day===0?-6:1-day)+(state.calendarOffset*7);
 base.setDate(base.getDate()+mondayShift);
 const start=base.toISOString().slice(0,10);
 const endDate=new Date(base); endDate.setDate(endDate.getDate()+6);
 const end=endDate.toISOString().slice(0,10);
 if(!state.calendarDate || state.calendarDate<start || state.calendarDate>end) state.calendarDate=start;
 const monthLabel=base.toLocaleDateString("es-US",{month:"long",year:"numeric"});
 return `<div class="calendar-head"><button class="btn small" id="calPrev">‹</button><div><b class="calendar-title">${monthLabel}</b><div class="muted">Selecciona un día y marca su estado</div></div><button class="btn small" id="calNext">›</button></div>
 <div class="calendar calendar-redesign">${days.map((d,i)=>{const x=new Date(base);x.setDate(base.getDate()+i);const date=x.toISOString().slice(0,10);const done=data.sessions.some(s=>s.date===date);const mark=data.calendarMarks[date]||"";const effective=done?"work":mark;const cls=effective||"";return `<button class="day ${cls} ${date===today()?"today":""} ${date===state.calendarDate?"selected":""}" data-cal-date="${date}" title="${fmtDate(date)}"><span>${d}</span><b>${x.getDate()}</b><small>${effective==="work"?"✓":effective==="miss"?"×":effective==="rest"?"—":""}</small></button>`}).join("")}</div>
 ${calendarPanel(state.calendarDate)}`;
}
function weekDate(i){const d=new Date();d.setHours(12,0,0,0);let day=d.getDay();let diff=(day===0?-6:1-day)+i+(state.calendarOffset*7);d.setDate(d.getDate()+diff);return d.toISOString().slice(0,10);}
function calendarDay(date){
 state.calendarDate=date;
 const cal=document.querySelector(".calendar-redesign");
 if(cal){
   cal.querySelectorAll("[data-cal-date]").forEach(x=>x.classList.toggle("selected",x.dataset.calDate===date));
 }
 const panel=document.getElementById("calendarPanel");
 if(panel) panel.outerHTML=calendarPanel(date);
}
function plan(){
 return `<div class="hero"><span class="pill">PLANIFICADOR</span><h1>Tu semana</h1><p>Plan inteligente: prioriza ejercicios y distribución según tu objetivo <b>${esc(data.profile.goal)}</b>, nivel <b>${esc(data.profile.level)}</b> y días disponibles.</p><div class="notice" style="margin-top:12px">Cada ejercicio de la biblioteca está etiquetado por objetivo y equipo. Puedes cambiar cualquier día y sustituir movimientos.</div><div class="row" style="margin-top:12px"><button class="btn primary" id="generatePlan">Generar plan automático</button><button class="btn" id="addRoutine">+ Día manual</button></div></div>
 <div class="card"><div class="between"><div><b>Objetivo</b><div class="muted">${esc(data.profile.goal)}</div></div><button class="btn small" id="editProfile">Editar</button></div></div>
 <h2 class="sectiontitle">Próximos 7 días</h2><div class="card">${Array.from({length:7},(_,i)=>{const date=addDaysISO(today(),i),r=routineForDate(date),d=dateFromISO(date),label=d.toLocaleDateString("es-US",{weekday:"long",month:"short",day:"numeric"});return `<div class="listitem"><div class="between"><div><b style="text-transform:capitalize">${esc(label)}</b><div class="muted">${r?esc(r.name):"Descanso / sin rutina asignada"}</div></div>${r?`<button class="btn small" data-use-routine="${esc(r.id)}">Elegir para hoy</button>`:`<span class="pill">Libre</span>`}</div></div>`}).join("")}</div><h2 class="sectiontitle">Rutinas base de la semana</h2>${data.routines.length?data.routines.map((r,i)=>routineCard(r,i)).join(""):`<div class="card empty">Genera tu plan para comenzar.</div>`}
 <h2 class="sectiontitle">Biblioteca de ejercicios</h2><div class="card"><div class="row"><input class="input" id="exSearch" placeholder="Buscar ejercicio, músculo o equipo..."></div><div class="tagrow" style="margin:10px 0"><span class="pill">Objetivo: ${esc(data.profile.goal)}</span><span class="pill">Nivel: ${esc(data.profile.level)}</span><span class="pill">Preferencia: ${esc(data.profile.gender||"No especificar")}</span><span class="pill">${data.exercises.length} ejercicios</span></div><div id="exerciseLibrary">${libraryItems()}</div></div>`;
}
function routineCard(r,i){
 return `<div class="card"><div class="between"><div><span class="pill">${["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"][r.day]||"Día"}</span><h3>${esc(r.name)}</h3><div class="muted">${r.exercises.length} ejercicios</div></div><div class="row"><button class="btn small" data-edit-routine="${r.id}">Editar</button><button class="btn small danger" data-del-routine="${r.id}">×</button></div></div>
 ${r.exercises.map(id=>{const e=exerciseById(id);return e?`<div class="listitem"><b>${esc(e.name)}</b><div class="muted">${e.sets} × ${e.reps} · ${e.rest}s</div></div>`:""}).join("")}</div>`;
}

// Imágenes reales de los ejercicios (RepDB Free). Se muestran en miniaturas y en la guía.
const EXERCISE_IMAGES = {"bench":"bench-press","incline":"incline-db-press","row":"bent-over-db-row","pulldown":"lat-pulldown","squat":"squat","rdl":"romanian-deadlift","ohp":"dumbbell-shoulder-press","curl":"bicep-curl","pushdown":"tricep-pushdown","plank":"plank","deadlift":"deadlift","legpress":"leg-press","legcurl":"leg-curl","legext":"leg-extension","calf":"machine-calf-raise","bulgarian":"bulgarian-split-squat","hipthrust":"hip-thrust","lunge":"walking-lunge","stepup":"step-ups","goblet":"goblet-squat","latrow":"seated-cable-row","tbar":"t-bar-row","pullup":"pull-up","assistedpullup":"assisted-pull-ups","facepull":"face-pull","latraise":"lateral-raise","rearDelt":"dumbbell-reverse-fly","dip":"dips","cablefly":"cable-fly","chestpress":"chest-press-machine","inclinebar":"incline-bench-press","hammer":"cross-body-hammer-curl","preacher":"barbell-preacher-curl","skull":"lying-tricep-extension","overheadtriceps":"overhead-tricep-extension","crunch":"crunches","legraise":"hanging-leg-raise","deadbug":"dead-bug","mountain":"mountain-climbers","burpee":"burpees","jumpingjack":"jumping-jacks","bike":"stationary-bike","rower":"rowing-machine","walk":"incline-treadmill-walk","pushup":"push-up","inclinepush":"incline-push-ups","farmers":"dumbbell-farmers-walk","swing":"kettlebell-swing","splitSquat":"split-squat","cableRow":"seated-cable-row","reversefly":"dumbbell-reverse-fly"};
function exerciseImagePaths(e){
 const slug=EXERCISE_IMAGES[e?.id];
 if(!slug) return [];
 const base="./images/";
 const hasMain=["plank","burpee","bike","walk","farmers"].includes(e?.id);
 return hasMain ? [base+slug+"-main.webp"] : [base+slug+"-start.webp",base+slug+"-peak.webp"];
}
function exerciseMedia(e, mode="compact"){
 const paths=exerciseImagePaths(e);
 if(!paths.length) return "";
 if(mode==="guide"){
   return '<div class="guide-images">'+paths.map((p,i)=>'<div class="guide-image"><img src="'+p+'" alt="'+esc(e.name)+' '+(i===0?"posición inicial":"posición final")+'" loading="lazy"><span>'+(i===0?"Inicio":"Movimiento")+'</span></div>').join("")+'</div>';
 }
 return '<img class="exthumb-img" src="'+paths[0]+'" alt="'+esc(e.name)+'" loading="lazy" onerror="this.style.display=\'none\'">';
}

function exerciseThumb(e){ return `<div class="exthumb" aria-label="Miniatura de ${esc(e.name)}">${exerciseMedia(e)}</div>`; }
function libraryItems(filter=""){
 const q=filter.trim().toLowerCase();
 const goal=data.profile.goal;
 const arr=data.exercises.filter(e=>!q||`${e.name} ${e.muscle} ${e.equipment} ${e.difficulty} ${(e.goals||[]).join(" ")}`.toLowerCase().includes(q));
 const rank={Principiante:1,Intermedio:2,Avanzado:3}, max=rank[data.profile.level]||1;
 arr.sort((a,b)=>{const ga=(b.goals||[]).includes(goal)-(a.goals||[]).includes(goal);if(ga)return ga;return (rank[a.difficulty]||2)-(rank[b.difficulty]||2);});
 return arr.map(e=>`<div class="listitem exercise-card"><div class="exercise-top">${exerciseThumb(e)}<div class="exercise-info"><b>${esc(e.name)}</b><div class="muted">${esc(e.muscle)} · ${esc(e.equipment)} · ${e.sets}×${e.reps}</div><div class="tagrow"><span class="pill">${esc(e.difficulty||"Intermedio")}</span>${(e.goals||[]).slice(0,3).map(g=>`<span class="pill">${esc(g)}</span>`).join("")}</div></div></div><div class="row" style="margin-top:9px"><button class="btn small" data-fav="${e.id}">${e.favorite?"★ Favorito":"☆ Favorito"}</button><button class="btn small" data-guide="${e.id}">📖 Guía</button><button class="btn small" data-edit-ex="${e.id}">Editar</button></div></div>`).join("")||`<div class="empty">No encontrado.</div>`;
}

function ensureSessionSets(s,r){
 if(!s||!r)return;
 s.sets=s.sets||[];
 r.exercises.forEach(id=>{const e=exerciseById(id);if(!e)return;const rows=s.sets.filter(x=>x.exerciseId===id);for(let i=rows.length;i<e.sets;i++)s.sets.push({id:uid("set"),exerciseId:id,weight:"",reps:e.reps,rir:coachState().settings?.rir??2,completed:false,setType:'normal'});});
}
function train(){
 if(!state.activeSession){
  const r=routineForToday();
  return `<div class="hero"><span class="pill">ENTRENAR</span><h1>Sesión de hoy</h1><p>Registra cada serie. GymTrack usará peso, repeticiones y RIR para sugerirte la próxima progresión.</p></div>
  ${r?`<div class="card"><div class="between"><div><h3>${esc(r.name)}</h3><div class="muted">${r.exercises.length} ejercicios · ${fmtDate(today())}</div></div><div class="row"><button class="btn" id="chooseWorkoutTrain">Elegir rutina</button><button class="btn primary" id="beginSession">Comenzar</button></div></div>${r.advanced?`<div class="notice" style="margin-top:10px"><b>⚡ ${esc(r.advanced.methodLabel||r.advanced.method)}</b> · ${esc(r.advanced.description||"")}</div>`:""}</div>`:`<div class="card empty">Primero genera un plan desde la pestaña Plan.</div>`}
  <div class="notice">Consejo: si un ejercicio produce dolor agudo o inusual, detén el ejercicio y busca orientación profesional. Esta app no sustituye consejo médico.</div>`;
 }
 const s=state.activeSession, r=data.routines.find(x=>x.id===s.routineId);
 if(!r){state.activeSession=null;return train();}
 ensureSessionSets(s,r);
 const total=r.exercises.length, done=s.sets.filter(x=>x.completed).length, expected=r.exercises.reduce((a,id)=>a+(exerciseById(id)?.sets||3),0); const next=r.exercises.find(id=>s.sets.some(x=>x.exerciseId===id&&!x.completed));
 return `<div class="between"><div><span class="pill">SESIÓN</span><h1>${esc(r.name)}</h1><div class="muted">${next?'Siguiente: '+esc(exerciseById(next)?.name||''):'Todos los ejercicios registrados'}</div></div><button class="btn" id="finishSession">Finalizar</button></div><div class="card"><div class="between"><span class="muted" id="sessionProgressText">${done}/${expected} series completadas</span><b id="sessionProgressPct">${Math.round(done/Math.max(expected,1)*100)}%</b></div><div class="progressbar" style="margin-top:8px"><i id="sessionProgressBar" style="width:${Math.min(100,done/Math.max(expected,1)*100)}%"></i></div></div>
 ${r.exercises.map(id=>exerciseBlock(id,s)).join("")}
 <div class="card"><label class="label">Notas de esta sesión</label><textarea class="textarea" id="sessionNote" placeholder="¿Cómo te sentiste?">${esc(s.note||"")}</textarea></div>`;
}
function exerciseBlock(id,s){
 const e=exerciseById(id);if(!e)return "";
 const rows=s.sets.filter(x=>x.exerciseId===id);
 const sug=suggest(id);
 const adv=routineForToday()?.advanced;
 let advNote="";
 if(adv && (adv.exerciseId===id || adv.secondaryId===id)){
   const labels={superset:"⚡ Superserie",dropset:"⚡ Dropset",restpause:"⚡ Rest-pause",tempo:"⚡ Tempo",warmup:"⚡ Calentamiento"};
   const detail=adv.method==="superset"?`Alterna con ${esc(exerciseById(adv.secondaryId)?.name||"el segundo ejercicio")}.`:adv.method==="dropset"?`Al terminar, reduce ${Number(adv.dropPct)||20}% y continúa.`:adv.method==="restpause"?`Haz un microdescanso de ${Number(adv.pauseSec)||20}s y continúa.`:adv.method==="tempo"?`Usa tempo ${esc(adv.tempo||"3-1-1")}.`:"Haz 2–4 series progresivas antes de las efectivas.";
   advNote=`<div class="advanced-callout"><b>${labels[adv.method]||"Entrenamiento avanzado"}</b><span>${detail}</span></div>`;
 }
 return `<div class="card"><div class="between"><div><h3>${esc(e.name)}</h3><div class="muted">${esc(e.muscle)} · descanso ${e.rest}s</div></div><button class="btn small" data-guide="${e.id}">Guía</button></div>${advNote}<div class="notice" style="margin:9px 0">${esc(sug.text)}</div><div class="sethead"><span>Serie</span><span>Peso</span><span>Reps</span><span>RIR</span><span>✓</span></div>${rows.map((x,i)=>{const typeLabel={warmup:'CALENTAMIENTO',dropset:'DROPSET',restpause:'REST-PAUSE',tempo:'TEMPO',superset:'SUPERSET'}[x.setType]||'';const meta=x.setType==='tempo'?` · ${esc(x.tempo||'3-1-1')}`:x.setType==='restpause'?` · ${Number(x.pauseSec)||20}s`:x.setType==='dropset'?` · -${Number(x.dropPct)||20}%`:'';return `<div class="setrow ${x.setType&&x.setType!=='normal'?'advanced-set':''}"><div class="set-label"><b>${esc(x.label||('Serie '+(i+1)))}</b>${typeLabel?`<span class="set-badge">${typeLabel}${meta}</span>`:''}</div><input class="input" type="number" step="0.5" placeholder="${sug.weight||"peso"}" value="${esc(x.weight)}" data-set="${x.id}" data-field="weight"><input class="input" type="number" min="0" placeholder="reps" value="${esc(x.reps)}" data-set="${x.id}" data-field="reps"><input class="input" type="number" min="0" max="5" step="1" placeholder="RIR" value="${x.rir??2}" data-set="${x.id}" data-field="rir"><input class="check" type="checkbox" ${x.completed?"checked":""} data-set="${x.id}" data-field="completed"></div>`}).join("")}<div class="row" style="margin-top:10px"><button class="btn small" data-rest="${e.rest}" data-rest-ex="${e.id}">⏱ Descanso</button><button class="btn small" data-warmup-ex="${e.id}">🔥 Warm-up</button><button class="btn small" data-plates-ex="${e.id}">🏋️ Discos</button><button class="btn small" data-note-ex="${e.id}">📝 Nota</button></div></div>`;
}

function progress(){
 const w=data.weights.slice(-8);
 const maxW=Math.max(...w.map(x=>Number(x.weight)||0),1);
 const volumeBy={}, muscleVolume={}, weekStart=new Date(); weekStart.setHours(0,0,0,0); weekStart.setDate(weekStart.getDate()-6);
 const monthStart=new Date(); monthStart.setHours(0,0,0,0); monthStart.setDate(monthStart.getDate()-29);
 let weekVol=0, monthVol=0, best1RM=0, best1RMEx=null, rirValues=[];
 data.sessions.forEach(sess=>{
   const d=new Date((sess.date||today())+'T12:00:00');
   sess.sets.forEach(x=>{
     const wt=Number(x.weight)||0, reps=Number(x.reps)||0, vol=wt*reps, ex=exerciseById(x.exerciseId);
     if(vol>0){volumeBy[x.exerciseId]=(volumeBy[x.exerciseId]||0)+vol; const key=ex?.muscle||'General'; muscleVolume[key]=(muscleVolume[key]||0)+vol; if(d>=weekStart)weekVol+=vol; if(d>=monthStart)monthVol+=vol;}
     if(wt>0&&reps>0&&reps<=30){const one=wt*(1+reps/30);if(one>best1RM){best1RM=one;best1RMEx=ex?.name||x.exerciseId;}}
     if(x.rir!==''&&x.rir!==undefined&&Number.isFinite(Number(x.rir)))rirValues.push(Number(x.rir));
   });
 });
 const top=Object.entries(volumeBy).sort((a,b)=>b[1]-a[1]).slice(0,5);
 const muscles=Object.entries(muscleVolume).sort((a,b)=>b[1]-a[1]).slice(0,6);
 const avgRir=rirValues.length?rirValues.reduce((a,b)=>a+b,0)/rirValues.length:null;
 const photoDates=[...new Set(data.photos.map(p=>p.date))].sort().reverse();
 return `<div class="hero"><div class="between"><div><span class="pill">PROGRESO</span><h1>Tu evolución</h1><p>Registra peso, entrenamientos y fotos para ver cambios con el tiempo.</p></div><button class="btn primary small" id="advancedAnalytics">📊 Análisis</button></div></div>
 <div class="grid"><div class="card"><div class="kpi">Peso</div><div class="big">${data.profile.currentWeight||"—"} <small>${data.profile.currentWeight?data.profile.unit:""}</small></div></div><div class="card"><div class="kpi">Meta</div><div class="big">${data.profile.goalWeight||"—"}</div></div><div class="card"><div class="kpi">Volumen 7 días</div><div class="big">${Math.round(weekVol)} <small>${data.profile.unit}·reps</small></div></div><div class="card"><div class="kpi">RIR medio</div><div class="big">${avgRir===null?'—':avgRir.toFixed(1)}</div></div></div>
 <div class="card"><div class="between"><h3>Peso corporal</h3><button class="btn small" id="addWeight">+ Registrar</button></div>${w.length?`<div class="chart">${w.map(x=>`<div class="bar" style="height:${Math.max(5,Number(x.weight)/maxW*100)}%"><span>${x.weight}</span></div>`).join("")}</div>`:`<div class="empty">Registra varios pesos para ver la tendencia.</div>`}</div>
 <div class="card"><h3>Volumen por ejercicio</h3>${top.length?top.map(([id,v])=>{let e=exerciseById(id);return `<div class="listitem"><div class="between"><b>${esc(e?.name||id)}</b><span>${Math.round(v)} ${data.profile.unit}·reps</span></div></div>`}).join(""):`<div class="empty">Completa entrenamientos para generar estadísticas.</div>`}</div>
 <div class="card"><h3>Volumen por grupo muscular</h3>${muscles.length?muscles.map(([m,v])=>`<div class="listitem"><div class="between"><b>${esc(m)}</b><span>${Math.round(v)} ${data.profile.unit}·reps</span></div></div>`).join(""):`<div class="empty">Aún no hay volumen registrado.</div>`}</div>
 <div class="grid"><div class="card"><div class="kpi">Volumen 30 días</div><div class="big">${Math.round(monthVol)} <small>${data.profile.unit}·reps</small></div></div><div class="card"><div class="kpi">1RM estimado</div><div class="big">${best1RM?Math.round(best1RM*10)/10:"—"} <small>${best1RM?data.profile.unit:""}</small></div><div class="muted">${best1RMEx?esc(best1RMEx):'Registra una serie con peso y reps'}</div></div></div>
 <div class="card"><div class="between"><h3>Récords personales</h3><span class="pill">${Object.keys(data.records).length}</span></div>${Object.entries(data.records).slice(0,12).map(([id,v])=>`<div class="listitem"><b>${esc(exerciseById(id)?.name||id)}</b><div class="muted">Mejor peso: ${v.weight} ${data.profile.unit} · mejor serie: ${v.weight}×${v.reps}${v.oneRM?` · 1RM est.: ${roundUnit(v.oneRM,data.profile.unit)} ${data.profile.unit}`:""}</div></div>`).join("")||`<div class="empty">Tus PR aparecerán al registrar sesiones.</div>`}</div>
 <div class="card"><div class="between"><h3>Fotos de progreso</h3><button class="btn small" id="addPhoto">+ Foto</button></div>${photoDates.length?photoDates.slice(0,6).map(d=>`<div class="listitem"><div class="between"><b>${fmtDate(d)}</b><button class="btn small" data-compare="${d}">Comparar</button></div><div class="photo-grid">${data.photos.filter(p=>p.date===d).map(p=>`<button class="photo photo-button" data-photo-id="${p.id}" aria-label="Ver foto ${esc(p.type)}"><img src="${p.data}" alt="${esc(p.type)}"></button>`).join("")}</div></div>`).join(""):`<div class="empty">Sube fotos frontal, lateral y espalda para comparar.</div>`}</div>`;
}

function idealRange(){
 let cm=Number(data.profile.height||0); if(data.profile.heightUnit==="ft") cm=((Number(data.profile.heightFeet)||0)*12+(Number(data.profile.heightInches)||0))*2.54;
 if(!cm)return null;
 const lo=18.5*Math.pow(cm/100,2), hi=24.9*Math.pow(cm/100,2);
 const conv=v=>data.profile.unit==="lb"?v*2.20462:v;
 return {cm,lo:conv(lo),hi:conv(hi),unit:data.profile.unit};
}
function more(){
 return `<div id="coachProPanel" class="card coach-panel"></div><div class="card"><div class="between"><div><h3>GymTrack Plus</h3><div class="muted">Biblioteca ampliada, planes por objetivo, guía visual, progresión y seguimiento completo.</div></div><span class="pill">ACTIVO</span></div></div><div class="hero"><span class="pill">MÁS</span><h1>Herramientas</h1><p>Biblioteca, nutrición, recuperación y copia de seguridad.</p></div>
 <div class="card"><h3>Perfil y peso orientativo</h3>${idealRange()?`<div class="muted">Estatura: <b>${idealRange().cm.toFixed(1)} cm</b></div><div class="big" style="margin-top:6px">${idealRange().lo.toFixed(data.profile.unit==="lb"?0:1)}–${idealRange().hi.toFixed(data.profile.unit==="lb"?0:1)} ${data.profile.unit}</div><div class="muted">Rango orientativo basado en IMC 18.5–24.9. No es un objetivo médico.</div>`:`<div class="muted">Agrega tu estatura desde Perfil para calcular un rango orientativo.</div>`}<button class="btn" id="moreProfile" style="margin-top:10px">Editar perfil</button></div>
 <div class="card"><h3>Nutrición</h3><div class="two"><div><label class="label">Calorías objetivo</label><input class="input" id="calories" type="number" value="${esc(data.nutrition.calories)}"></div><div><label class="label">Proteína (g)</label><input class="input" id="protein" type="number" value="${esc(data.nutrition.protein)}"></div></div><label class="label">Agua hoy: <b id="waterCount">${data.nutrition.water}</b> vasos</label><div class="row"><button class="btn" id="waterMinus">−</button><button class="btn primary" id="waterPlus">+ Vaso</button></div><div class="muted" style="margin-top:8px">Registro rápido de vasos; se guarda en este dispositivo y no mueve la pantalla.</div></div>
 <div class="card"><h3>Biblioteca de ejercicios</h3><div class="row"><button class="btn primary" id="newExercise">+ Crear ejercicio</button><button class="btn" id="favorites">⭐ Favoritos</button></div><div class="muted" style="margin-top:8px">${data.exercises.length} ejercicios disponibles.</div></div>\n <div class="card"><h3>Créditos</h3><div class="muted">Imágenes y datos de ejercicios por <a href="https://repdb.co" target="_blank" rel="noopener" style="color:#63e49b">RepDB (repdb.co)</a>.</div></div>
 <div class="card"><h3>Recuperación</h3><p class="muted">Esto alimenta al Coach inteligente: sueño, energía y fatiga se convierten en una puntuación de recuperación que puede cambiar la recomendación de entrenamiento.</p><div class="two"><div><label class="label">Sueño (horas)</label><input class="input" id="sleep" type="number" step="0.5" min="0" max="24" value="${esc(data.recovery?.sleep||'')}"></div><div><label class="label">Energía 1–5</label><select class="select" id="energy">${[1,2,3,4,5].map(v=>`<option ${Number(data.recovery?.energy||3)===v?'selected':''}>${v}</option>`).join('')}</select></div></div><label class="label">Fatiga/dolor 0–10</label><input class="input" id="soreness" type="number" min="0" max="10" value="${esc(data.recovery?.soreness??3)}"><button class="btn primary" style="margin-top:10px" id="saveRecovery">Guardar y evaluar</button>${data.recovery?`<div class="notice" style="margin-top:10px">Último resultado: <b>${Math.round(data.recovery.score)}/100</b> · ${esc(data.recovery.label||'')}</div>`:''}</div>
 <div class="card"><h3>Apariencia</h3><div class="muted">Cambia el color de la interfaz sin tocar tus entrenamientos, fotos ni datos.</div><div class="row" style="margin-top:10px"><button class="btn primary" id="changeTheme">🎨 Cambiar color</button><span class="pill">${esc(data.profile.theme||"verde")}</span></div></div>
 <div class="card"><h3>Datos</h3><div class="row"><button class="btn" id="export">Exportar copia</button><button class="btn" id="importBtn">Importar copia</button><button class="btn danger" id="reset">Borrar todo</button></div><input id="fileImport" type="file" accept=".json" hidden><div class="notice" style="margin-top:10px">Tus datos se guardan localmente en este dispositivo. Haz una copia de vez en cuando.</div></div>`;
}
function chooseTheme(){
 const themes=[['verde','🟢','Verde original'],['azul','🔵','Azul'],['morado','🟣','Morado'],['rosa','🌸','Rosa'],['rojo','🔴','Rojo'],['dorado','🟡','Dorado'],['claro','☀️','Claro']];
 openModal(`<h2>🎨 Color de GymTrack</h2><p class="muted">Elige el aspecto que quieras. Solo cambia los colores; tus datos, rutinas y fotos permanecen iguales.</p><div class="theme-grid">${themes.map(t=>`<button class="theme-option ${data.profile.theme===t[0]?"active":""}" data-theme-choice="${t[0]}"><span>${t[1]}</span><b>${t[2]}</b><small>${t[0]==="claro"?"Fondo claro":"Fondo oscuro"}</small></button>`).join('')}</div><button class="btn" id="cancelModal" style="width:100%;margin-top:12px">Cerrar</button>`);
 document.querySelectorAll('[data-theme-choice]').forEach(b=>b.onclick=()=>{data.profile.theme=b.dataset.themeChoice;save();applyTheme();closeModal();render();toast(`Tema ${b.textContent.trim()} aplicado`);});
}
function openModal(html){document.getElementById("modalBox").innerHTML=html;document.getElementById("modal").classList.remove("hidden");}
function closeModal(){
 const mb=document.getElementById("modalBox");
 mb?.classList.remove("photo-modalbox");
 document.getElementById("modal").classList.add("hidden");
 clearInterval(timer);
}
document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
function editProfile(){
 openModal(`<h2>Perfil y plan</h2><label class="label">Nombre</label><input class="input" id="pname" value="${esc(data.profile.name)}"><label class="label">Sexo / preferencia de planificación</label><select class="select" id="pgender">${["No especificar","Mujer","Hombre"].map(x=>`<option ${x===data.profile.gender?"selected":""}>${x}</option>`).join("")}</select><div class="notice" style="margin-top:8px">El sexo no limita ejercicios. Si eliges Mujer u Hombre, solo cambia el orden de prioridad del plan; tu objetivo y nivel siguen siendo los factores principales.</div><label class="label">Objetivo</label><select class="select" id="pgoal">${["Definir","Rebajar peso","Ganar músculo","Ganar fuerza","Condición física"].map(x=>`<option ${x===data.profile.goal?"selected":""}>${x}</option>`).join("")}</select><div class="two"><div><label class="label">Nivel</label><select class="select" id="plevel">${["Principiante","Intermedio","Avanzado"].map(x=>`<option ${x===data.profile.level?"selected":""}>${x}</option>`).join("")}</select></div><div><label class="label">Días/semana</label><select class="select" id="pdays">${[3,4,5,6].map(x=>`<option ${x===data.profile.days?"selected":""}>${x}</option>`).join("")}</select></div></div><div class="two"><div><label class="label">Peso actual</label><input class="input" id="pweight" type="number" step="0.1" value="${esc(data.profile.currentWeight)}"></div><div><label class="label">Peso meta</label><input class="input" id="pgoalweight" type="number" step="0.1" value="${esc(data.profile.goalWeight)}"></div></div>
 <div class="two"><div><label class="label">Unidad de estatura</label><select class="select" id="pheightUnit"><option value="cm" ${data.profile.heightUnit==="cm"||!data.profile.heightUnit?"selected":""}>Centímetros (cm)</option><option value="ft" ${data.profile.heightUnit==="ft"?"selected":""}>Pies y pulgadas (ft/in)</option></select></div><div id="heightCmWrap" class="${data.profile.heightUnit==="ft"?"hidden":""}"><label class="label">Estatura (cm)</label><input class="input" id="pheight" type="number" step="0.1" min="0" placeholder="Ej. 175" value="${data.profile.heightUnit==="cm"?esc(data.profile.height||""):""}"></div></div>
 <div class="two ${data.profile.heightUnit==="ft"?"":"hidden"}" id="heightFtWrap"><div><label class="label">Pies</label><input class="input" id="pheightFeet" type="number" min="0" max="8" step="1" value="${esc(data.profile.heightFeet||"")}" placeholder="Ej. 5"></div><div><label class="label">Pulgadas</label><input class="input" id="pheightInches" type="number" min="0" max="11" step="0.1" value="${esc(data.profile.heightInches||"")}" placeholder="Ej. 10"></div></div>
 <div class="card" id="idealBox" style="margin-top:10px;background:#101611"><b>Peso orientativo según estatura</b><div class="muted" id="idealWeightText">Introduce tu estatura para calcular un rango orientativo.</div></div>
 <div class="card theme-card" style="margin-top:10px"><b>Apariencia</b><div class="muted" style="margin-top:4px">Elige un color para que cada persona pueda personalizar GymTrack sin cambiar sus datos.</div><label class="label">Tema</label><select class="select" id="ptheme"><option value="verde" ${data.profile.theme==="verde"?"selected":""}>🟢 Verde original</option><option value="azul" ${data.profile.theme==="azul"?"selected":""}>🔵 Azul</option><option value="morado" ${data.profile.theme==="morado"?"selected":""}>🟣 Morado</option><option value="rosa" ${data.profile.theme==="rosa"?"selected":""}>🌸 Rosa</option><option value="rojo" ${data.profile.theme==="rojo"?"selected":""}>🔴 Rojo</option><option value="dorado" ${data.profile.theme==="dorado"?"selected":""}>🟡 Dorado</option><option value="claro" ${data.profile.theme==="claro"?"selected":""}>☀️ Claro</option></select></div>
 <div class="two"><div><label class="label">Unidad</label><select class="select" id="punit"><option ${data.profile.unit==="lb"?"selected":""}>lb</option><option ${data.profile.unit==="kg"?"selected":""}>kg</option></select></div><div><label class="label">Descanso predeterminado</label><div class="two"><input class="input" id="prestMin" type="number" min="0" value="${Math.floor((data.profile.defaultRest||90)/60)}" placeholder="Min"><input class="input" id="prestSec" type="number" min="0" max="59" value="${(data.profile.defaultRest||90)%60}" placeholder="Seg"></div><div class="muted" style="margin-top:5px">Minutos y segundos</div></div></div><div class="row" style="margin-top:15px"><button class="btn" id="cancelModal">Cancelar</button><button class="btn primary" id="saveProfile">Guardar</button></div>`);
 const ph=document.getElementById("pheight"), pu=document.getElementById("pheightUnit"), iw=document.getElementById("idealWeightText");
 function calcIdeal(){
   const u=pu?.value||"cm";
   let cm=0;
   if(u==="ft"){const ft=Number(document.getElementById("pheightFeet")?.value||0);const inches=Number(document.getElementById("pheightInches")?.value||0);cm=(ft*12+inches)*2.54;}else{cm=Number(ph?.value||0);}
   if(!cm){iw.textContent="Introduce tu estatura para calcular un rango orientativo.";return;}
   // Educational BMI-based reference range (18.5–24.9), not a medical target.
   const lo=(18.5*Math.pow(cm/100,2)).toFixed(1), hi=(24.9*Math.pow(cm/100,2)).toFixed(1);
   const unit=data.profile.unit||"lb";
   const conv=v=>unit==="lb"?Math.round(Number(v)*2.20462):Number(v).toFixed(1);
   iw.innerHTML=`Para ${cm.toFixed(1)} cm, un rango orientativo basado en IMC 18.5–24.9 es <b>${conv(lo)}–${conv(hi)} ${unit}</b>. El “peso ideal” real depende de edad, sexo, masa muscular y otros factores; úsalo solo como referencia.`;
 }
 ph?.addEventListener("input",calcIdeal);
 const hu=document.getElementById("pheightUnit"), hcw=document.getElementById("heightCmWrap"), hfw=document.getElementById("heightFtWrap");
 hu?.addEventListener("change",()=>{const ft=hu.value==="ft";hcw?.classList.toggle("hidden",ft);hfw?.classList.toggle("hidden",!ft);calcIdeal();});
 document.getElementById("pheightFeet")?.addEventListener("input",calcIdeal);
 document.getElementById("pheightInches")?.addEventListener("input",calcIdeal);
 pu?.addEventListener("change",calcIdeal);calcIdeal();
 document.getElementById("ptheme")?.addEventListener("change",e=>{document.body.dataset.theme=e.target.value;document.documentElement.style.colorScheme=e.target.value==="claro"?"light":"dark";});
 document.getElementById("cancelModal")?.addEventListener("click",e=>{e.preventDefault();applyTheme();closeModal();});
 document.getElementById("saveProfile")?.addEventListener("click",e=>{
   e.preventDefault();
   const ft=hu?.value==="ft";
   const oldUnit=data.profile.unit||"lb";
   const newUnit=document.getElementById("punit").value;
   let heightCm=0;
   if(ft){
     const feet=Math.max(0,Number(document.getElementById("pheightFeet")?.value||0));
     const inches=Math.max(0,Math.min(11.9,Number(document.getElementById("pheightInches")?.value||0)));
     data.profile.heightFeet=feet; data.profile.heightInches=inches; heightCm=(feet*12+inches)*2.54;
   }else{
     heightCm=Math.max(0,Number(ph?.value||0)); data.profile.heightFeet=0; data.profile.heightInches=0;
   }
   const min=Math.max(0,Number(document.getElementById("prestMin")?.value||0));
   const sec=Math.max(0,Math.min(59,Number(document.getElementById("prestSec")?.value||0)));
   if(oldUnit!==newUnit) convertAllWeights(oldUnit,newUnit);
   Object.assign(data.profile,{name:document.getElementById("pname").value,gender:document.getElementById("pgender")?.value||"No especificar",goal:document.getElementById("pgoal").value,level:document.getElementById("plevel").value,days:Number(document.getElementById("pdays").value),height:heightCm,heightUnit:ft?"ft":"cm",unit:newUnit,defaultRest:min*60+sec,theme:document.getElementById("ptheme")?.value||data.profile.theme||"verde"});
   data.profile.currentWeight=convertWeightValue(document.getElementById("pweight").value,oldUnit,newUnit);
   data.profile.goalWeight=convertWeightValue(document.getElementById("pgoalweight").value,oldUnit,newUnit);
   save();closeModal();render();toast(oldUnit!==newUnit?`Perfil guardado · pesos convertidos a ${newUnit}`:"Perfil guardado");
 });
}
function exercisePickerMarkup(selectedIds=[]){
 const groups={"Pecho":[],"Espalda":[],"Hombros":[],"Bíceps":[],"Tríceps":[],"Piernas y glúteos":[],"Core/abdomen":[],"Cardio y cuerpo completo":[],"Otros":[]};
 const classify=e=>{const m=String(e.muscle||"").toLowerCase(), n=String(e.name||"").toLowerCase();if(/pecho|pectoral/.test(m))return "Pecho";if(/espalda|dorsal|trapecio/.test(m))return "Espalda";if(/hombro|deltoid/.test(m))return "Hombros";if(/bíceps|biceps|antebrazo/.test(m))return "Bíceps";if(/tríceps|triceps/.test(m))return "Tríceps";if(/pierna|cuádriceps|cuadriceps|femoral|glúte|glute|pantorrilla|gemelo/.test(m))return "Piernas y glúteos";if(/core|abdomen|abdominal/.test(m)||/plancha|crunch|dead bug|leg raise/.test(n))return "Core/abdomen";if(/cardio|cuerpo completo/.test(m)||/bicicleta|burpee|jumping|caminadora|mountain climber|remo erg/.test(n))return "Cardio y cuerpo completo";return "Otros";};
 data.exercises.forEach(e=>groups[classify(e)].push(e));
 return `<div class="exercise-picker-help notice">Elige ejercicios por zona muscular. Desliza horizontalmente las opciones de cada grupo; cada tarjeta muestra músculo, equipo y series/repeticiones.</div><div class="exercise-picker">${Object.entries(groups).filter(([,arr])=>arr.length).map(([g,arr])=>`<details class="exercise-group" ${arr.some(e=>selectedIds.includes(e.id))?"open":""}><summary>${g}<span class="pill">${arr.length}</span></summary><div class="exercise-options">${arr.map(e=>`<label class="picker-exercise"><input type="checkbox" data-rx="${esc(e.id)}" ${selectedIds.includes(e.id)?"checked":""}><span><b>${esc(e.name)}</b><small class="muted">${esc(e.muscle||g)} · ${esc(e.equipment||"Equipo general")} · ${e.sets||3}×${e.reps||10}</small></span></label>`).join("")}</div></details>`).join("")}</div>`;
}
function editRoutine(id){
 const r=data.routines.find(x=>x.id===id);
 openModal(`<h2>Editar día</h2><label class="label">Nombre</label><input class="input" id="rname" value="${esc(r.name)}"><label class="label">Día</label><select class="select" id="rday">${["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"].map((x,i)=>`<option value="${i}" ${r.day===i?"selected":""}>${x}</option>`).join("")}</select><label class="label">Ejercicios por grupo muscular</label><div id="routineExercises">${exercisePickerMarkup(r.exercises)}</div><div class="row" style="margin-top:15px"><button class="btn" id="cancelModal">Cancelar</button><button class="btn primary" id="saveRoutine" data-id="${r.id}">Guardar</button></div>`);
}
function newRoutine(){
 openModal(`<h2>Nuevo día</h2><label class="label">Nombre</label><input class="input" id="rname" value="Mi entrenamiento"><label class="label">Día</label><select class="select" id="rday">${["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"].map((x,i)=>`<option value="${i}">${x}</option>`).join("")}</select><label class="label">Ejercicios por grupo muscular</label>${exercisePickerMarkup([])}<div class="row" style="margin-top:15px"><button class="btn" id="cancelModal">Cancelar</button><button class="btn primary" id="createRoutine">Crear</button></div>`);
}
function editExercise(id){
 const e=exerciseById(id);
 openModal(`<h2>Editar ejercicio</h2><label class="label">Nombre</label><input class="input" id="ename" value="${esc(e.name)}"><label class="label">Músculo</label><input class="input" id="emuscle" value="${esc(e.muscle)}"><div class="three"><div><label class="label">Series</label><input class="input" id="esets" type="number" value="${e.sets}"></div><div><label class="label">Reps/seg</label><input class="input" id="ereps" type="number" value="${e.reps}"></div><div><label class="label">Descanso</label><input class="input" id="erest" type="number" value="${e.rest}"></div></div><label class="label">Cómo hacerlo</label><textarea class="textarea" id="eguide">${esc(e.guide)}</textarea><label class="label">Errores comunes</label><textarea class="textarea" id="emistakes">${esc(e.mistakes)}</textarea><div class="row" style="margin-top:15px"><button class="btn" id="cancelModal">Cancelar</button><button class="btn primary" id="saveExercise" data-id="${id}">Guardar</button></div>`);
}
function newExercise(){
 openModal(`<h2>Nuevo ejercicio</h2><label class="label">Nombre</label><input class="input" id="ename"><label class="label">Músculo</label><input class="input" id="emuscle"><div class="three"><div><label class="label">Series</label><input class="input" id="esets" type="number" value="3"></div><div><label class="label">Reps/seg</label><input class="input" id="ereps" type="number" value="10"></div><div><label class="label">Descanso</label><input class="input" id="erest" type="number" value="90"></div></div><label class="label">Cómo hacerlo</label><textarea class="textarea" id="eguide"></textarea><label class="label">Errores comunes</label><textarea class="textarea" id="emistakes"></textarea><div class="row" style="margin-top:15px"><button class="btn" id="cancelModal">Cancelar</button><button class="btn primary" id="createExercise">Crear</button></div>`);
}
function guide(id){
 const e=exerciseById(id); if(!e)return;
 openModal(`<h2>${esc(e.name)}</h2><div class="guide-hero">${exerciseThumb(e)}<div><span class="pill">${esc(e.muscle)}</span><div class="muted" style="margin-top:6px">${esc(e.equipment)}</div></div></div>${exerciseMedia(e,"guide")}<h3>Cómo hacerlo</h3><p class="muted guide-text">${esc(e.guide)}</p><div class="notice"><b>Clave técnica:</b> movimiento controlado, postura estable y rango que puedas dominar.</div><h3>Errores comunes</h3><p class="muted guide-text">${esc(e.mistakes)}</p><h3>Recomendado para</h3><div class="tagrow">${(e.goals||[]).map(g=>`<span class="pill">${esc(g)}</span>`).join("")}</div><button class="btn primary" id="cancelModal" style="margin-top:15px;width:100%">Cerrar</button>`);
}

function generatePlan(){
 const days=Number(data.profile.days)||4, goal=data.profile.goal, level=data.profile.level, gender=data.profile.gender||"No especificar";
 const levelRank={Principiante:1,Intermedio:2,Avanzado:3}, maxLevel=levelRank[level]||1;
 const genderFocus={
   "Mujer":["Glúteos","Piernas","Core","Hombros","Espalda"],
   "Hombre":["Pecho","Espalda","Hombros","Bíceps","Tríceps","Piernas"],
   "No especificar":[]
 };
 const split3=["Empuje","Tirón","Piernas + core"], split4=["Pecho + tríceps","Espalda + bíceps","Piernas","Hombros + core"], split5=["Pecho","Espalda","Piernas","Hombros","Brazos + core"], split6=["Pecho","Espalda","Piernas","Pecho + hombros","Espalda + brazos","Piernas + core"];
 const names=days===3?split3:days===4?split4:days===5?split5:split6;
 const termMap={"Empuje":["Pecho","Hombros","Tríceps"],"Tirón":["Espalda","Bíceps"],"Piernas + core":["Piernas","Core"],"Pecho + tríceps":["Pecho","Tríceps"],"Espalda + bíceps":["Espalda","Bíceps"],"Piernas":["Piernas"],"Hombros + core":["Hombros","Core"],"Pecho":["Pecho"],"Espalda":["Espalda"],"Hombros":["Hombros"],"Brazos + core":["Bíceps","Tríceps","Core"],"Pecho + hombros":["Pecho","Hombros"],"Espalda + brazos":["Espalda","Bíceps","Tríceps"]};
 const goalFallback={"Ganar músculo":["Pecho","Espalda","Piernas","Hombros","Bíceps","Tríceps"],"Ganar fuerza":["Pecho","Espalda","Piernas","Hombros"],"Rebajar peso":["Piernas","Core","Cardio"],"Definir":["Pecho","Espalda","Piernas","Hombros","Core","Brazos"],"Condición física":["Cardio","Core","Piernas"]};
 const termsFor=name=>termMap[name]||goalFallback[goal]||["Cuerpo"];
 const score=e=>{let s=0; if((e.goals||[]).includes(goal))s+=100; const f=genderFocus[gender]||[]; const text=`${e.muscle} ${e.name}`.toLowerCase(); f.forEach((x,i)=>{if(text.includes(x.toLowerCase()))s+=20-i;}); const dr=levelRank[e.difficulty]||2; if(dr===maxLevel)s+=12; if(dr<maxLevel)s+=7; if(dr>maxLevel)s-=80; return s;};
 const pick=(terms,limit)=>data.exercises.filter(e=>{const text=`${e.muscle} ${e.name}`.toLowerCase(); return terms.some(t=>text.includes(t.toLowerCase())) && (levelRank[e.difficulty]||2)<=maxLevel;}).sort((a,b)=>score(b)-score(a)).slice(0,limit).map(e=>e.id);
 const fallback=(limit)=>data.exercises.filter(e=>(levelRank[e.difficulty]||2)<=maxLevel).sort((a,b)=>score(b)-score(a)).slice(0,limit).map(e=>e.id);
 data.routines=names.slice(0,days).map((name,i)=>{let ex=pick(termsFor(name),goal==="Ganar fuerza"?5:6); if(ex.length<3)ex=[...new Set([...ex,...fallback(6)])].slice(0,6); return {id:uid("r"),name,day:i,exercises:ex,advanced:null};});
 save();render();toast(`Plan ${goal.toLowerCase()} · ${level}${gender!=="No especificar"?` · ${gender}`:""} generado`);
}
function beginSession(){
 const r=routineForToday(); if(!r)return;
 state.activeSession={id:uid("s"),date:today(),routineId:r.id,sets:[],note:""};
 r.exercises.forEach(id=>{const e=exerciseById(id);for(let i=0;i<e.sets;i++)state.activeSession.sets.push({id:uid("set"),exerciseId:id,weight:"",reps:e.reps,rir:coachState().settings?.rir??2,completed:false,setType:'normal'});});
 if(r.advanced){
  const a=r.advanced;
  if(a.method==='warmup'){
   const e=exerciseById(a.exerciseId); if(e){const base=e.sets; for(let i=0;i<2;i++) state.activeSession.sets.unshift({id:uid('warm'),exerciseId:e.id,weight:'',reps:Math.max(5,Math.min(8,e.reps)),rir:4,completed:false,setType:'warmup',label:'Calentamiento '+(i+1)});}
  }
  if(a.method==='dropset'){
   const rows=state.activeSession.sets.filter(x=>x.exerciseId===a.exerciseId).slice(-1)[0]; if(rows) state.activeSession.sets.push({id:uid('drop'),exerciseId:a.exerciseId,weight:'',reps:(exerciseById(a.exerciseId)?.reps||10),rir:0,completed:false,setType:'dropset',label:'Dropset',dropPct:Number(a.dropPct)||20});
  }
  if(a.method==='restpause'){
   const rows=state.activeSession.sets.filter(x=>x.exerciseId===a.exerciseId).slice(-1)[0]; if(rows) state.activeSession.sets.push({id:uid('rp'),exerciseId:a.exerciseId,weight:'',reps:(exerciseById(a.exerciseId)?.reps||10),rir:0,completed:false,setType:'restpause',label:'Rest-pause',pauseSec:Number(a.pauseSec)||20});
  }
  if(a.method==='superset' && a.secondaryId){
   const group=uid('ss');
   state.activeSession.sets.filter(x=>x.exerciseId===a.exerciseId).forEach((x,i)=>{x.setType='superset';x.supersetGroup=group;x.label='A · Serie '+(i+1);});
   state.activeSession.sets.filter(x=>x.exerciseId===a.secondaryId).forEach((x,i)=>{x.setType='superset';x.supersetGroup=group;x.label='B · Serie '+(i+1);});
  }
  if(a.method==='tempo'){
   state.activeSession.sets.filter(x=>x.exerciseId===a.exerciseId).forEach(x=>{x.setType='tempo';x.tempo=a.tempo||'3-1-1';});
  }
 }
 state.tab="train";render();
}
function finishSession(){
 const s=state.activeSession;s.note=document.getElementById("sessionNote")?.value||"";
 s.sets=s.sets.filter(x=>x.weight!==""||x.completed);
 if(!s.sets.length){toast("Registra al menos una serie");return}
 data.sessions.push(s);updateRecords(s);save();state.activeSession=null;state.tab="progress";render();toast("Entrenamiento guardado");
}
function estimate1RM(weight,reps){const w=Number(weight)||0,r=Number(reps)||0;return w>0&&r>0&&r<=30?w*(1+r/30):0;}
function updateRecords(s){
 const by={};s.sets.forEach(x=>{if(x.completed||x.weight!==""){const w=Number(x.weight)||0,r=Number(x.reps)||0,one=estimate1RM(w,r);if(!by[x.exerciseId]||one>by[x.exerciseId].oneRM||(one===by[x.exerciseId].oneRM&&w>by[x.exerciseId].weight))by[x.exerciseId]={weight:w,reps:r,oneRM:one};}});
 Object.entries(by).forEach(([id,v])=>{const old=data.records[id];if(!old||v.weight>Number(old.weight)||v.reps>Number(old.reps)||v.oneRM>Number(old.oneRM||0))data.records[id]=v;});
}
function calcStreak(){
 let n=0,d=new Date(); if(!data.sessions.length)return 0;
 while(true){const ds=d.toISOString().slice(0,10);if(data.sessions.some(s=>s.date===ds)){n++;d.setDate(d.getDate()-1)}else break;if(n>365)break}return n;
}
function addWeight(){
 openModal(`<h2>Registrar peso</h2><input class="input" id="weightVal" type="number" step="0.1" placeholder="${data.profile.unit}"><div class="row" style="margin-top:14px"><button class="btn" id="cancelModal">Cancelar</button><button class="btn primary" id="saveWeight">Guardar</button></div>`);
}
function addPhoto(){
 openModal(`<h2>Foto de progreso</h2><label class="label">Tipo</label><select class="select" id="photoType"><option>Frontal</option><option>Lateral</option><option>Espalda</option></select><label class="label">Foto</label><input class="input" id="photoFile" type="file" accept="image/*"><div class="row" style="margin-top:14px"><button class="btn" id="cancelModal">Cancelar</button><button class="btn primary" id="savePhoto">Guardar</button></div>`);
}
async function compressImage(file){
 return new Promise((resolve,reject)=>{const fr=new FileReader();fr.onload=()=>{const img=new Image();img.onload=()=>{const max=1000,scale=Math.min(1,max/Math.max(img.width,img.height));const c=document.createElement("canvas");c.width=Math.round(img.width*scale);c.height=Math.round(img.height*scale);c.getContext("2d").drawImage(img,0,0,c.width,c.height);resolve(c.toDataURL("image/jpeg",.72));};img.onerror=reject;img.src=fr.result};fr.onerror=reject;fr.readAsDataURL(file)});
}
function exportData(){
 const blob=new Blob([JSON.stringify(buildBackup(),null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="GymTrack_backup_v16.json";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);toast("Copia completa exportada");
}
function bind(){
 document.getElementById("settingsBtn").onclick=editProfile;
 document.querySelectorAll(".navbtn").forEach(b=>b.onclick=()=>{state.tab=b.dataset.tab;if(state.tab==="train"&&!state.activeSession){}render()});
 document.getElementById("startToday")?.addEventListener("click",()=>{
   if(data.sessions.some(s=>s.date===today()&&s.routineId===routineForToday()?.id)){
     state.tab="train"; render(); requestAnimationFrame(()=>window.scrollTo({top:0,left:0,behavior:"auto"}));
   } else beginSession();
 });
 document.getElementById("startToday2")?.addEventListener("click",()=>beginSession());
 document.getElementById("chooseWorkoutToday")?.addEventListener("click",openWorkoutPicker);
 document.getElementById("chooseWorkoutToday2")?.addEventListener("click",openWorkoutPicker);
 document.getElementById("chooseWorkoutTrain")?.addEventListener("click",openWorkoutPicker);
 document.getElementById("goPlan")?.addEventListener("click",()=>{state.tab="plan";render()});
 document.getElementById("generatePlan")?.addEventListener("click",generatePlan);
 document.getElementById("addRoutine")?.addEventListener("click",newRoutine);
 document.getElementById("editProfile")?.addEventListener("click",editProfile);
 document.querySelectorAll("[data-use-routine]").forEach(b=>b.onclick=()=>{if(b.closest(".listitem") && b.dataset.useRoutine){openWorkoutPicker();const sel=document.getElementById("pickWorkout");if(sel)sel.value=b.dataset.useRoutine;}});
 document.querySelectorAll("[data-edit-routine]").forEach(b=>b.onclick=()=>editRoutine(b.dataset.editRoutine));
 document.querySelectorAll("[data-del-routine]").forEach(b=>b.onclick=()=>{if(confirm("¿Eliminar este día?")){data.routines=data.routines.filter(r=>r.id!==b.dataset.delRoutine);save();render()}});
 document.getElementById("exSearch")?.addEventListener("input",e=>document.getElementById("exerciseLibrary").innerHTML=libraryItems(e.target.value));
 document.querySelectorAll("[data-guide]").forEach(b=>b.onclick=()=>guide(b.dataset.guide));
 document.querySelectorAll("[data-edit-ex]").forEach(b=>b.onclick=()=>editExercise(b.dataset.editEx));
 document.querySelectorAll("[data-fav]").forEach(b=>b.onclick=()=>{const e=exerciseById(b.dataset.fav);e.favorite=!e.favorite;save();render()});
 document.getElementById("beginSession")?.addEventListener("click",beginSession);
 document.getElementById("finishSession")?.addEventListener("click",finishSession);
 document.querySelectorAll("[data-set]").forEach(inp=>{
   const event=inp.type==="checkbox"?"change":"input";
   inp.addEventListener(event,()=>{
     const x=state.activeSession?.sets?.find(s=>s.id===inp.dataset.set); if(!x)return;
     x[inp.dataset.field]=inp.type==="checkbox"?inp.checked:inp.value;
     if(inp.dataset.field==="rir"){x.rir=Math.max(0,Math.min(5,Number(x.rir)||0)); inp.value=x.rir;}
     save();
     if(inp.type==="checkbox"){
       if(inp.checked && data.settings?.gymMode){ const sx=state.activeSession?.sets?.find(s=>s.id===inp.dataset.set); const ex=sx?exerciseById(sx.exerciseId):null; if(ex){ let rest=Number(ex.rest)||90; if(sx.setType==='warmup') rest=Math.min(rest,60); if(sx.setType==='dropset') rest=60; if(sx.setType==='restpause') rest=Number(sx.pauseSec)||20; if(sx.setType==='superset') rest=Math.min(rest,75); const rir=Number(sx.rir); if(Number.isFinite(rir)&&rir<=1) rest+=30; setTimeout(()=>startTimer(rest),80); } }
       const r=data.routines.find(r=>r.id===state.activeSession.routineId); const expected=r?r.exercises.reduce((a,id)=>a+(exerciseById(id)?.sets||3),0):1; const done=state.activeSession.sets.filter(s=>s.completed).length; const pct=Math.round(done/Math.max(expected,1)*100);
       const t=document.getElementById("sessionProgressText"),p=document.getElementById("sessionProgressPct"),bar=document.getElementById("sessionProgressBar"); if(t)t.textContent=`${done}/${expected} series completadas`; if(p)p.textContent=pct+"%"; if(bar)bar.style.width=Math.min(100,pct)+"%";
     }
   });
 });
 document.querySelectorAll("[data-rest]").forEach(b=>b.onclick=()=>startTimer(Number(b.dataset.rest)));
 document.querySelectorAll("[data-note-ex]").forEach(b=>b.onclick=()=>exerciseNote(b.dataset.noteEx));
 document.getElementById("addWeight")?.addEventListener("click",addWeight);
 document.getElementById("addPhoto")?.addEventListener("click",addPhoto);
 document.getElementById("moreProfile")?.addEventListener("click",editProfile);
 document.getElementById("changeTheme")?.addEventListener("click",chooseTheme);
 document.getElementById("newExercise")?.addEventListener("click",newExercise);
 document.getElementById("favorites")?.addEventListener("click",()=>{openModal(`<h2>Favoritos</h2>${data.exercises.filter(e=>e.favorite).map(e=>`<div class="listitem"><b>${esc(e.name)}</b><div class="muted">${esc(e.muscle)}</div></div>`).join("")||'<div class="empty">No tienes favoritos.</div>'}<button class="btn primary" id="cancelModal">Cerrar</button>`)});
 document.getElementById("waterPlus")?.addEventListener("click",()=>{data.nutrition.water=Math.min(30,(Number(data.nutrition.water)||0)+1);save();const el=document.getElementById("waterCount");if(el)el.textContent=data.nutrition.water;toast("+1 vaso de agua")});
 document.getElementById("waterMinus")?.addEventListener("click",()=>{data.nutrition.water=Math.max(0,(Number(data.nutrition.water)||0)-1);save();const el=document.getElementById("waterCount");if(el)el.textContent=data.nutrition.water;toast("Vaso eliminado")});
 document.getElementById("calories")?.addEventListener("change",e=>{data.nutrition.calories=e.target.value;save()});
 document.getElementById("protein")?.addEventListener("change",e=>{data.nutrition.protein=e.target.value;save()});
 document.getElementById("saveRecovery")?.addEventListener("click",()=>{const sleep=Math.max(0,Math.min(24,Number(document.getElementById("sleep")?.value||0)));const energy=Math.max(1,Math.min(5,Number(document.getElementById("energy")?.value||3)));const soreness=Math.max(0,Math.min(10,Number(document.getElementById("soreness")?.value||0)));const score=Math.round((Math.min(sleep,8)/8)*40+(energy/5)*35+((10-soreness)/10)*25);const label=score>=80?'Buena recuperación':score>=60?'Recuperación moderada':'Recuperación baja';data.recovery={date:today(),sleep,energy,soreness,score,label};const d=coachState();d.recoveryLog=d.recoveryLog||[];d.recoveryLog.push(data.recovery);save();render();toast("Recuperación guardada y conectada al Coach")});
 document.getElementById("export")?.addEventListener("click",exportData);
 document.getElementById("importBtn")?.addEventListener("click",()=>document.getElementById("fileImport").click());
 document.getElementById("fileImport")?.addEventListener("change",e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const raw=JSON.parse(r.result);if(!validBackup(raw))throw Error();const x=raw.data||raw;data=x;data.nutrition=data.nutrition||{calories:"",protein:"",water:0,meals:[]};data.scheduleOverrides=data.scheduleOverrides||{};data.photos=data.photos||[];data.weights=data.weights||[];data.sessions=data.sessions||[];data.records=data.records||{};data.calendarMarks=data.calendarMarks||{};data.recovery=data.recovery||null;data.profile=data.profile||{};data.profile.theme=data.profile.theme||"verde";data.coach=data.coach||raw.coach||defaultCoach();data.settings=data.settings||{weekStart:1,gymMode:false};data.settings.gymMode=!!data.settings.gymMode;save();state.activeSession=null;render();toast("Copia completa restaurada")}catch(err){alert("El archivo no parece una copia válida de GymTrack.")}};r.readAsText(f)});
 document.getElementById("reset")?.addEventListener("click",()=>{if(confirm("Esto borrará todos tus datos locales. ¿Continuar?")){localStorage.removeItem(KEY);location.reload()}});
 document.querySelectorAll("[data-compare]").forEach(b=>b.onclick=()=>comparePhotos(b.dataset.compare));
 document.querySelectorAll("[data-photo-id]").forEach(b=>b.onclick=()=>viewPhoto(b.dataset.photoId));
}
let modalDelegationReady=false;
function installModalDelegation(){
 if(modalDelegationReady)return; modalDelegationReady=true;
 document.addEventListener("click",async e=>{
  const b=e.target.closest("button"); if(!b)return;
  if(b.id==="applyWorkoutToday"){e.preventDefault();applyWorkoutToday(document.getElementById("pickWorkout")?.value);return;}
  if(b.id==="saveRoutine"){
   e.preventDefault(); const r=data.routines.find(x=>x.id===b.dataset.id); if(!r)return;
   r.name=document.getElementById("rname")?.value?.trim()||"Mi entrenamiento";
   r.day=Number(document.getElementById("rday")?.value||0);
   r.exercises=[...document.querySelectorAll("[data-rx]:checked")].map(x=>x.dataset.rx);
   save(); closeModal(); render(); toast("Día actualizado"); return;
  }
  if(b.id==="createRoutine"){
   e.preventDefault(); data.routines.push({id:uid("r"),name:document.getElementById("rname")?.value?.trim()||"Mi entrenamiento",day:Number(document.getElementById("rday")?.value||0),exercises:[...document.querySelectorAll("[data-rx]:checked")].map(x=>x.dataset.rx)});
   save(); closeModal(); render(); toast("Día creado"); return;
  }
  if(b.id==="saveExercise"){
   e.preventDefault(); const x=exerciseById(b.dataset.id); if(!x)return;
   Object.assign(x,{name:document.getElementById("ename")?.value?.trim()||x.name,muscle:document.getElementById("emuscle")?.value?.trim()||x.muscle,sets:Number(document.getElementById("esets")?.value)||3,reps:Number(document.getElementById("ereps")?.value)||10,rest:Number(document.getElementById("erest")?.value)||90,guide:document.getElementById("eguide")?.value||"",mistakes:document.getElementById("emistakes")?.value||""});
   save(); closeModal(); render(); toast("Ejercicio actualizado"); return;
  }
  if(b.id==="createExercise"){
   e.preventDefault(); data.exercises.push({id:uid("ex"),name:document.getElementById("ename")?.value?.trim()||"Nuevo ejercicio",muscle:document.getElementById("emuscle")?.value?.trim()||"General",sets:Number(document.getElementById("esets")?.value)||3,reps:Number(document.getElementById("ereps")?.value)||10,rest:Number(document.getElementById("erest")?.value)||90,guide:document.getElementById("eguide")?.value||"",mistakes:document.getElementById("emistakes")?.value||"",favorite:false});
   save(); closeModal(); render(); toast("Ejercicio creado"); return;
  }
  if(b.id==="saveWeight"){
   e.preventDefault(); const input=document.getElementById("weightVal"), v=Number(input?.value); if(!v){toast("Escribe un peso válido");return;}
   data.weights.push({id:uid("w"),date:today(),weight:v}); data.profile.currentWeight=v; save(); closeModal(); render(); toast("Peso guardado"); return;
  }
  if(b.id==="savePhoto"){
   e.preventDefault(); const f=document.getElementById("photoFile")?.files?.[0]; if(!f){toast("Selecciona una foto");return;}
   try{const d=await compressImage(f); data.photos.push({id:uid("p"),date:today(),type:document.getElementById("photoType")?.value||"Frontal",data:d}); save(); closeModal(); render(); toast("Foto guardada");}catch(err){alert("No se pudo procesar la foto. Intenta con otra imagen.");} return;
  }
  if(b.dataset.subEx){
   e.preventDefault(); const target=exerciseById(b.dataset.subEx); if(!target)return;
   closeModal();
   openModal(`<h2>Usar ${esc(target.name)}</h2><div class="muted">Selecciona el día donde quieres sustituir un ejercicio.</div>${data.routines.map(r=>`<button class="btn" style="width:100%;margin-top:8px" data-sub-routine="${r.id}">${esc(r.name)}</button>`).join('')||'<div class="empty">Primero crea una rutina.</div>'}<button class="btn" id="cancelModal" style="margin-top:12px;width:100%">Cancelar</button>`);
   state.substituteExerciseId=target.id; return;
  }
  if(b.dataset.subRoutine){
   const r=data.routines.find(x=>x.id===b.dataset.subRoutine); const target=exerciseById(state.substituteExerciseId); if(!r||!target)return;
   openModal(`<h2>Sustituir en ${esc(r.name)}</h2><div class="muted">Elige qué ejercicio del día quieres reemplazar por <b>${esc(target.name)}</b>.</div>${r.exercises.map(id=>{const ex=exerciseById(id);return `<button class="btn" style="width:100%;margin-top:8px" data-replace-id="${id}">${esc(ex?.name||id)}</button>`}).join('')}<button class="btn" id="cancelModal" style="margin-top:12px;width:100%">Cancelar</button>`);
   state.replaceRoutineId=r.id; return;
  }
  if(b.dataset.replaceId){
   const r=data.routines.find(x=>x.id===state.replaceRoutineId), idx=r?.exercises.indexOf(b.dataset.replaceId), target=exerciseById(state.substituteExerciseId);
   if(r&&idx>=0&&target){r.exercises[idx]=target.id;save();closeModal();render();toast(`Sustituido por ${target.name}`);} return;
  }
  if(b.dataset.calAction){
   const date=state.calendarDate; if(!date)return;
   if(b.dataset.calAction==="clear") delete data.calendarMarks[date]; else data.calendarMarks[date]=b.dataset.calAction;
   save();
   const cal=document.querySelector(".calendar-redesign");
   if(cal){
     cal.querySelectorAll("[data-cal-date]").forEach(x=>x.classList.toggle("selected",x.dataset.calDate===date));
     const dayBtn=cal.querySelector(`[data-cal-date="${date}"]`);
     if(dayBtn){
       const done=data.sessions.some(s=>s.date===date), mark=data.calendarMarks[date]||"", effective=done?"work":mark;
       dayBtn.classList.remove("work","miss","rest"); if(effective)dayBtn.classList.add(effective);
       const sm=dayBtn.querySelector("small"); if(sm)sm.textContent=effective==="work"?"✓":effective==="miss"?"×":effective==="rest"?"—":"";
     }
   }
   const panel=document.getElementById("calendarPanel"); if(panel)panel.outerHTML=calendarPanel(date);
   toast("Calendario actualizado"); return;
  }
  if(b.id==="calPrev"){const y=window.scrollY;state.calendarOffset--;render();requestAnimationFrame(()=>window.scrollTo({top:y,left:0,behavior:"auto"}));return;}
  if(b.id==="calNext"){const y=window.scrollY;state.calendarOffset++;render();requestAnimationFrame(()=>window.scrollTo({top:y,left:0,behavior:"auto"}));return;}
  if(b.dataset.calDate){calendarDay(b.dataset.calDate);return;}
  if(b.dataset.photoNav){const list=photoList();const next=state.photoIndex+(b.dataset.photoNav==="next"?1:-1);if(next>=0&&next<list.length)renderPhotoViewer(next);return;}
 });
}
installModalDelegation();
function exerciseNote(id){
 const old=data.notes[id]||"";
 openModal(`<h2>Nota: ${esc(exerciseById(id)?.name)}</h2><textarea class="textarea" id="exnote">${esc(old)}</textarea><div class="row" style="margin-top:12px"><button class="btn" id="cancelModal">Cancelar</button><button class="btn primary" id="saveExNote">Guardar</button></div>`);
 document.getElementById("saveExNote").onclick=()=>{data.notes[id]=document.getElementById("exnote").value;save();closeModal();toast("Nota guardada")};
 document.getElementById("cancelModal").onclick=closeModal;
}
let timer=null;
function startTimer(sec){
 clearInterval(timer);let left=sec;
 openModal(`<h2>Descanso</h2><div style="font-size:52px;font-weight:800;text-align:center;padding:18px" id="timer">${left}</div><button class="btn primary" id="stopTimer" style="width:100%">Terminar</button>`);
 timer=setInterval(()=>{left--;const el=document.getElementById("timer");if(el)el.textContent=left;if(left<=0){clearInterval(timer);toast("Descanso terminado");}},1000);
 document.getElementById("stopTimer").onclick=()=>{clearInterval(timer);closeModal()};
}
function photoList(){
 return data.photos.slice().sort((a,b)=>String(b.date).localeCompare(String(a.date)) || String(b.id).localeCompare(String(a.id)));
}
function renderPhotoViewer(index){
 const list=photoList(); if(!list.length)return;
 const safeIndex=Math.max(0,Math.min(index,list.length-1));
 state.photoIndex=safeIndex;
 const p=list[safeIndex];
 const box=document.getElementById("modalBox"); if(!box)return;
 box.innerHTML=`<div class="photo-viewer" data-photo-index="${safeIndex}">
   <div class="photo-viewer-head"><div><span class="pill">${esc(p.type)}</span><div class="muted" style="margin-top:6px">${fmtDate(p.date)} · ${safeIndex+1}/${list.length}</div></div><button class="btn" id="cancelModal">Cerrar</button></div>
   <div class="photo-full-wrap" id="photoSwipeArea"><img class="photo-full" src="${p.data}" alt="${esc(p.type)}" decoding="async"></div>
   <div class="photo-swipe-hint">Desliza ← → para cambiar · desliza ↓ para cerrar</div>
   <div class="photo-nav"><button class="btn small" data-photo-nav="prev" ${safeIndex===0?"disabled":""}>‹ Anterior</button><button class="btn small" data-photo-nav="next" ${safeIndex===list.length-1?"disabled":""}>Siguiente ›</button></div>
 </div>`;
 box.classList.add("photo-modalbox");
 setupPhotoSwipe();
}
function viewPhoto(id){
 const list=photoList(); const index=list.findIndex(x=>x.id===id); if(index<0)return;
 openModal(`<div class="photo-viewer"></div>`);
 document.getElementById("modalBox")?.classList.add("photo-modalbox");
 renderPhotoViewer(index);
}
function setupPhotoSwipe(){
 const area=document.getElementById("photoSwipeArea"); if(!area)return;
 let sx=0,sy=0,active=false;
 area.ontouchstart=(e)=>{const t=e.changedTouches[0];sx=t.clientX;sy=t.clientY;active=true;};
 area.ontouchend=(e)=>{if(!active)return;active=false;const t=e.changedTouches[0];const dx=t.clientX-sx,dy=t.clientY-sy;
   if(Math.abs(dy)>90 && Math.abs(dy)>Math.abs(dx)*1.2 && dy>0){closeModal();return;}
   if(Math.abs(dx)>70 && Math.abs(dx)>Math.abs(dy)*1.15){const list=photoList();let next=state.photoIndex+(dx<0?1:-1);if(next>=0&&next<list.length)renderPhotoViewer(next);}
 };
 area.ontouchmove=(e)=>{if(!active)return;const t=e.changedTouches[0];const dx=t.clientX-sx,dy=t.clientY-sy;if(Math.abs(dx)>Math.abs(dy)){e.preventDefault();}};
}
function comparePhotos(date){
 const p=data.photos.filter(x=>x.date===date);
 const olderDates=[...new Set(data.photos.map(x=>x.date))].filter(d=>d<date).sort().reverse();
 const old=olderDates[0];
 openModal(`<h2>Comparación</h2><div class="muted">Actual: ${fmtDate(date)}${old?" · Anterior: "+fmtDate(old):""}</div><div class="two" style="margin-top:12px"><div><b>Actual</b><div class="photo-grid">${p.map(x=>`<button class="photo photo-button" data-photo-id="${x.id}"><img src="${x.data}"></button>`).join("")}</div></div><div><b>Anterior</b>${old?`<div class="photo-grid">${data.photos.filter(x=>x.date===old).map(x=>`<button class="photo photo-button" data-photo-id="${x.id}"><img src="${x.data}"></button>`).join("")}</div>`:`<div class="empty">No hay una fecha anterior.</div>`}</div></div><button class="btn primary" id="cancelModal" style="margin-top:14px">Cerrar</button>`);
}
/* ===== GymTrack v7 Pro Max ===== */
(function(){
 function C(){return coachState();}
 function CS(x){data.coach=Object.assign(defaultCoach(),x||{});save();}
 function cm(title,body){
   closeModal(); openModal(`<h2>${title}</h2><div>${body}</div><button class="btn" id="cancelModal" style="margin-top:14px;width:100%">Cerrar</button>`);
 }
 function progression(){
   cm('📈 Coach inteligente',`<p class="muted">Usa el rendimiento de la última serie para decidir si conviene progresar.</p><div class="two"><div><label class="label">Peso</label><input class="input" id="coachW" type="number" step="0.5"></div><div><label class="label">Reps</label><input class="input" id="coachR" type="number"></div></div><div class="two"><div><label class="label">RIR</label><input class="input" id="coachRir" type="number" min="0" max="5" value="2"></div><div><label class="label">Meta de reps</label><input class="input" id="coachMax" type="number" value="12"></div></div><button class="btn primary" id="coachAnalyze" style="margin-top:10px">Analizar</button><div class="coach-result" id="coachResult">Introduce una serie.</div><p class="tiny">Guía orientativa: prioriza técnica, control y recuperación.</p>`);
   document.getElementById('coachAnalyze').onclick=()=>{let w=+coachW.value,r=+coachR.value,rir=+coachRir.value,m=+coachMax.value||12;let msg=r>=m&&rir<=2?`Sube ligeramente la carga en la próxima sesión si mantienes la técnica.`:r<Math.max(6,m-4)?`Mantén o reduce la carga hasta entrar en el rango objetivo.`:`Mantén la carga e intenta añadir 1 repetición.`;coachResult.innerHTML='<b>'+msg+'</b>';};
 }
 function recovery(){
   const last=data.recovery||C().recoveryLog?.slice(-1)[0];
   cm('😴 Recuperación',`<p class="muted">Este módulo está conectado al entrenamiento. Al guardar sueño, energía y fatiga, el resultado se guarda en Coach Pro y la progresión puede recomendar no subir carga cuando la recuperación sea baja.</p><div class="two"><div><label class="label">Sueño (h)</label><input class="input" id="recSleep" type="number" step=".1" value="${esc(last?.sleep??7)}"></div><div><label class="label">Energía (1–5)</label><input class="input" id="recEnergy" type="number" min="1" max="5" value="${esc(last?.energy??3)}"></div></div><label class="label">Fatiga/dolor (0–10)</label><input class="input" id="recSore" type="number" min="0" max="10" value="${esc(last?.soreness??3)}"><button class="btn primary" id="recSave" style="margin-top:10px">Guardar y evaluar</button><div class="coach-result" id="recResult">${last?`Última recuperación: <b>${Math.round(last.score)}/100</b>`:''}</div>`);
   document.getElementById('recSave').onclick=()=>{let s=Math.max(0,Math.min(24,+recSleep.value||0)),e=Math.max(1,Math.min(5,+recEnergy.value||3)),f=Math.max(0,Math.min(10,+recSore.value||0)),score=Math.round(Math.min(s,8)/8*40+e/5*35+(10-f)/10*25),label=score>=80?'Buena recuperación':score>=60?'Recuperación moderada':'Recuperación baja';let entry={date:today(),sleep:s,energy:e,soreness:f,score,label};let d=C();d.recoveryLog.push(entry);CS(d);data.recovery=entry;save();recResult.innerHTML='<b>'+label+' · '+score+'/100</b><br>'+(score>=80?'Puedes seguir tu plan.':score>=60?'Considera moderar el volumen si notas fatiga.':'Prioriza descanso y una sesión más ligera si es necesario.');};
 }
 function nutrition(){
   const unit=data.profile.unit||'lb'; const kg=Number(data.profile.currentWeight||0)*(unit==='lb'?0.453592:1); const suggested=kg>0?`${Math.round(kg*1.6)}–${Math.round(kg*2.2)} g/día`:'1.6–2.2 g/kg/día'; const last=C().nutritionLog?.slice(-1)[0]||{};
   cm('🥗 Nutrición',`<p class="muted">Aquí registras lo que consumes. Las calorías son un objetivo que tú defines; la app no las inventa. Para proteína, una referencia de entrenamiento común es ${suggested} según tu peso actual.</p><div class="two"><div><label class="label">Calorías objetivo</label><input class="input" id="nCal" type="number" value="${esc(data.nutrition.calories||last.cal||'')}"></div><div><label class="label">Proteína objetivo (g)</label><input class="input" id="nPro" type="number" value="${esc(data.nutrition.protein||last.protein||'')}"></div></div><div class="two"><div><label class="label">Carbohidratos (g)</label><input class="input" id="nCarb" type="number" value="${esc(last.carbs||'')}"></div><div><label class="label">Grasas (g)</label><input class="input" id="nFat" type="number" value="${esc(last.fat||'')}"></div></div><label class="label">Agua (oz)</label><input class="input" id="nWater" type="number" value="${esc(last.water||'')}"><div class="notice" style="margin-top:10px">La tarjeta de agua de Más es un contador rápido de vasos. Este registro de nutrición sirve para guardar el resumen del día.</div><button class="btn primary" id="nSave" style="margin-top:10px">Guardar día</button>`);
   document.getElementById('nSave').onclick=()=>{let d=C();const entry={date:today(),cal:+nCal.value||0,protein:+nPro.value||0,carbs:+nCarb.value||0,fat:+nFat.value||0,water:+nWater.value||0};d.nutritionLog.push(entry);CS(d);data.nutrition.calories=entry.cal;data.nutrition.protein=entry.protein;save();closeModal();toast('Nutrición guardada');};
 }
 function measurements(){
   cm('📏 Medidas corporales',`<div class="two"><div><label class="label">Cintura</label><input class="input" id="mWaist" type="number" step=".1"></div><div><label class="label">Pecho</label><input class="input" id="mChest" type="number" step=".1"></div></div><div class="two"><div><label class="label">Brazo</label><input class="input" id="mArm" type="number" step=".1"></div><div><label class="label">Cadera</label><input class="input" id="mHip" type="number" step=".1"></div></div><label class="label">Muslo</label><input class="input" id="mLeg" type="number" step=".1"><button class="btn primary" id="mSave" style="margin-top:10px">Guardar medidas</button>`);
   document.getElementById('mSave').onclick=()=>{let d=C();d.measurements.push({date:today(),waist:+mWaist.value||0,chest:+mChest.value||0,arm:+mArm.value||0,hip:+mHip.value||0,leg:+mLeg.value||0});CS(d);closeModal();toast('Medidas guardadas');};
 }
 function stats(){
   const vol=data.sessions.reduce((n,s)=>n+s.sets.reduce((a,x)=>a+(+x.weight||0)*(+x.reps||0),0),0);
   const best=Object.keys(data.records||{}).length;
   const muscle={}; data.sessions.forEach(s=>s.sets.forEach(x=>{const e=exerciseById(x.exerciseId),v=(+x.weight||0)*(+x.reps||0);if(v)muscle[e?.muscle||'General']=(muscle[e?.muscle||'General']||0)+v;}));
   const top=Object.entries(muscle).sort((a,b)=>b[1]-a[1]).slice(0,5);
   cm('📊 Estadísticas avanzadas',`<div class="grid"><div class="card"><div class="kpi">Sesiones</div><div class="big">${data.sessions.length}</div></div><div class="card"><div class="kpi">PR</div><div class="big">${best}</div></div><div class="card"><div class="kpi">Volumen</div><div class="big">${Math.round(vol)}</div></div><div class="card"><div class="kpi">Fotos</div><div class="big">${data.photos.length}</div></div></div><h3>Volumen por músculo</h3>${top.map(([m,v])=>`<div class="coach-row"><b>${esc(m)}</b><span>${Math.round(v)} ${data.profile.unit}·reps</span></div>`).join('')||'<div class="empty">Registra sesiones para ver estadísticas.</div>'}<p class="muted">También puedes ver volumen semanal, mensual y 1RM estimado en Progreso.</p>`);
 }
 function achievements(){
   const d=C(), candidates=[['Primer entrenamiento','Completa tu primera sesión'],['7 días de constancia','Entrena 7 días diferentes'],['10 entrenamientos','Completa 10 sesiones'],['Primer PR','Registra un récord personal'],['Transformación','Registra tu primera foto']];
   candidates.forEach(([n,desc])=>{if((n==='Primer entrenamiento'&&data.sessions.length>=1)||(n==='7 días de constancia'&&new Set(data.sessions.map(x=>x.date)).size>=7)||(n==='10 entrenamientos'&&data.sessions.length>=10)||(n==='Primer PR'&&Object.keys(data.records||{}).length>=1)||(n==='Transformación'&&data.photos.length>=1))if(!d.achievements.some(a=>a.name===n))d.achievements.push({name:n,desc,date:today()});});CS(d);
   cm('🏆 Logros',d.achievements.length?d.achievements.slice().reverse().map(a=>`<div class="coach-row"><b>🏆 ${esc(a.name)}</b><small>${esc(a.desc||'')}</small><span>${fmtDate(a.date)}</span></div>`).join(''):'<div class="empty">Completa entrenamientos y metas para desbloquear logros.</div>');
 }
 function advanced(){
   const r=data.routines.find(x=>x.day===new Date().getDay()-1)||data.routines[0];
   const routines=data.routines.filter(x=>x.exercises?.length);
   if(!routines.length){cm('⚡ Entrenamiento avanzado','<div class="empty">Primero genera una rutina desde Plan.</div>');return;}
   const methods=[['superset','Superserie','Alterna dos ejercicios con poco descanso.'],['dropset','Dropset','Después de la serie principal, reduce la carga y continúa.'],['restpause','Rest-pause','Añade un microdescanso y continúa con la misma carga.'],['tempo','Tempo','Controla la velocidad de cada repetición, por ejemplo 3-1-1.'],['warmup','Calentamiento','Series progresivas antes de las series efectivas.']];
   const opts=routines.map(x=>`<option value="${x.id}" ${x.id===r?.id?'selected':''}>${esc(x.name)}</option>`).join('');
   openModal(`<h2>⚡ Entrenamiento avanzado</h2><p class="muted">Ahora sí puedes configurarlo y usarlo en la sesión. Elige un método y aplícalo a un ejercicio de una rutina.</p><label class="label">Rutina</label><select class="select" id="advRoutine">${opts}</select><label class="label">Método</label><select class="select" id="advMethod">${methods.map(m=>`<option value="${m[0]}">${m[1]} — ${m[2]}</option>`).join('')}</select><label class="label">Ejercicio principal</label><select class="select" id="advEx"></select><div id="advExtra"></div><div class="row" style="margin-top:15px"><button class="btn" id="cancelModal">Cancelar</button><button class="btn primary" id="saveAdvanced">Guardar en rutina</button></div>`);
   const fillEx=()=>{const rr=data.routines.find(x=>x.id===document.getElementById('advRoutine').value),sel=document.getElementById('advEx');if(sel)sel.innerHTML=(rr?.exercises||[]).map(id=>{const e=exerciseById(id);return `<option value="${id}">${esc(e?.name||id)}</option>`}).join('');renderAdvExtra();};
   const renderAdvExtra=()=>{const m=document.getElementById('advMethod')?.value,box=document.getElementById('advExtra');if(!box)return; if(m==='superset'){const rr=data.routines.find(x=>x.id===document.getElementById('advRoutine').value);box.innerHTML=`<label class="label">Segundo ejercicio</label><select class="select" id="advEx2">${(rr?.exercises||[]).map(id=>{const e=exerciseById(id);return `<option value="${id}">${esc(e?.name||id)}</option>`}).join('')}</select><div class="notice" style="margin-top:8px">Alterna A → B y descansa al terminar ambos.</div>`;}else if(m==='dropset'){box.innerHTML='<label class="label">Reducción de carga (%)</label><input class="input" id="advDrop" type="number" min="5" max="50" value="20"><div class="notice" style="margin-top:8px">Haz tu serie normal y luego baja el porcentaje elegido.</div>';}else if(m==='restpause'){box.innerHTML='<label class="label">Microdescanso (seg)</label><input class="input" id="advPause" type="number" min="5" max="60" value="20"><div class="notice" style="margin-top:8px">Usa el microdescanso solo si mantienes buena técnica.</div>';}else if(m==='tempo'){box.innerHTML='<label class="label">Tempo</label><input class="input" id="advTempo" value="3-1-1"><div class="notice" style="margin-top:8px">3 s bajada · 1 s pausa · 1 s subida.</div>';}else{box.innerHTML='<div class="notice" style="margin-top:8px">Haz 2–4 series progresivas antes de las series efectivas, sin llegar al fallo.</div>';}};
   document.getElementById('advRoutine').onchange=fillEx;document.getElementById('advMethod').onchange=renderAdvExtra;fillEx();
   document.getElementById('saveAdvanced').onclick=()=>{const rr=data.routines.find(x=>x.id===document.getElementById('advRoutine').value),m=document.getElementById('advMethod').value,ex=document.getElementById('advEx').value;if(!rr||!ex)return;const labels={superset:'Superserie',dropset:'Dropset',restpause:'Rest-pause',tempo:'Tempo',warmup:'Calentamiento'};const descriptions={superset:'Alterna dos ejercicios con poco descanso',dropset:`Reduce ${document.getElementById('advDrop')?.value||20}% y continúa`,restpause:`Microdescanso de ${document.getElementById('advPause')?.value||20}s`,tempo:`Tempo ${document.getElementById('advTempo')?.value||'3-1-1'}`,warmup:'Series progresivas antes de las efectivas'};rr.advanced={method:m,methodLabel:labels[m],description:descriptions[m],exerciseId:ex,secondaryId:document.getElementById('advEx2')?.value||null,dropPct:Number(document.getElementById('advDrop')?.value)||20,pauseSec:Number(document.getElementById('advPause')?.value)||20,tempo:document.getElementById('advTempo')?.value||'3-1-1'};save();closeModal();render();toast(`${labels[m]} guardada en ${rr.name}`);};
 }
 function substitutions(){
   const choices=data.exercises.slice(0,24);
   const rows=choices.map(e=>`<div class="coach-row"><b>${esc(e.name)}</b><small>${esc(e.muscle||'')} · ${esc(e.equipment||'')}</small><button class="btn small" data-sub-ex="${e.id}">Usar en una rutina</button></div>`).join('');
   cm('🔄 Sustituir ejercicio',`<p class="muted">Primero elige el ejercicio alternativo. Después selecciona la rutina y el ejercicio que quieres reemplazar.</p>${rows}`);
 }
 function chooseSubstitute(newId){
   const candidates=data.routines.filter(r=>r.exercises?.length);
   if(!candidates.length){toast('Crea una rutina primero');return;}
   const opts=candidates.map(r=>`<option value="${r.id}">${esc(r.name)}</option>`).join('');
   openModal(`<h2>Usar sustitución</h2><input type="hidden" id="subNew" value="${esc(newId)}"><label class="label">Rutina</label><select class="select" id="subRoutine">${opts}</select><label class="label">Ejercicio a reemplazar</label><select class="select" id="subOld"></select><div class="row" style="margin-top:15px"><button class="btn" id="cancelModal">Cancelar</button><button class="btn primary" id="confirmSub">Reemplazar</button></div>`);
   const fill=()=>{const r=data.routines.find(x=>x.id===document.getElementById('subRoutine').value);const sel=document.getElementById('subOld');if(sel)sel.innerHTML=(r?.exercises||[]).map(id=>{const e=exerciseById(id);return `<option value="${id}">${esc(e?.name||id)}</option>`}).join('');};
   document.getElementById('subRoutine').onchange=fill; fill();
   document.getElementById('confirmSub').onclick=()=>{const r=data.routines.find(x=>x.id===document.getElementById('subRoutine').value);const old=document.getElementById('subOld').value;const ni=document.getElementById('subNew').value;if(!r||!old||!ni)return; r.exercises=r.exercises.map(id=>id===old?ni:id);save();closeModal();render();toast('Ejercicio sustituido en la rutina');};
 }
 function body(){cm('🧍 Transformación corporal',`<div class="coach-row"><b>Peso actual</b><span>${data.profile.currentWeight||'—'} ${data.profile.unit||''}</span></div><div class="coach-row"><b>Peso meta</b><span>${data.profile.goalWeight||'—'} ${data.profile.unit||''}</span></div><div class="coach-row"><b>Fotos</b><span>${data.photos.length}</span></div><div class="coach-row"><b>Medidas</b><span>${C().measurements.length}</span></div><p class="muted">Usa Progreso para registrar peso y fotos y Coach Pro para medidas.</p>`);}
 function settings(){cm('⚙️ Configuración del Coach',`<label class="label">RIR predeterminado</label><input class="input" id="setRir" type="number" min="0" max="5" value="${C().settings.rir||2}"><button class="btn primary" id="setSave" style="margin-top:10px">Guardar configuración</button>`);document.getElementById('setSave').onclick=()=>{let d=C();d.settings.rir=Math.max(0,Math.min(5,+setRir.value||0));CS(d);closeModal();toast('Configuración guardada');};}
 window.openCoachPro=function(k){({progression,recovery,nutrition,measurements,stats,achievements,advanced,substitutions,body,settings}[k]||progression)();};
 window.renderCoachCard=function(){
   const host=document.getElementById('coachProPanel'); if(!host)return;
   host.innerHTML=`<div class="coach-head"><div><span class="eyebrow">COACH PRO MAX</span><h2>Entrenador inteligente</h2><p class="muted">10 áreas para planificar, entrenar, medir y mejorar.</p></div><span class="coach-badge">PRO</span></div><div class="coach-grid">${[['progression','📈','Progresión','Carga, reps y RIR'],['advanced','⚡','Entrenamiento avanzado','Superseries, dropsets, tempo'],['stats','📊','Estadísticas','Volumen, PR y sesiones'],['nutrition','🥗','Nutrición','Calorías y macros'],['recovery','😴','Recuperación','Sueño, energía y fatiga'],['measurements','📏','Medidas','Cintura, pecho y más'],['body','🧍','Transformación','Peso, fotos y medidas'],['achievements','🏆','Logros','Metas y constancia'],['substitutions','🔄','Sustituciones','Alternativas de ejercicios'],['settings','⚙️','Configuración','Preferencias del coach']].map(x=>`<button class="coach-tile" data-coach-pro="${x[0]}"><span class="coach-icon">${x[1]}</span><b>${x[2]}</b><small>${x[3]}</small></button>`).join('')}</div>`;
 };
 document.addEventListener('click',e=>{const b=e.target.closest('[data-coach-pro]');if(b)openCoachPro(b.dataset.coachPro); const sub=e.target.closest('[data-sub-ex]');if(sub)chooseSubstitute(sub.dataset.subEx);});
 const oldRender=window.render; if(typeof oldRender==='function'){window.render=function(){const r=oldRender.apply(this,arguments);setTimeout(renderCoachCard,0);return r;};}
 setTimeout(renderCoachCard,50);
})();


/* v14 PRO MAX: previous workout, exercise-specific progression, intelligent rest, advanced warm-up, integrated plate calculator, Gym Mode */
(function(){
  function lastSetsFor(exId){
   for(let i=data.sessions.length-1;i>=0;i--){const s=data.sessions[i];const rows=(s.sets||[]).filter(x=>x.exerciseId===exId&&((Number(x.weight)||0)>0||(Number(x.reps)||0)>0));if(rows.length)return {date:s.date,rows};}
   return null;
 }
 function weeklySets(){
   const cutoff=new Date();cutoff.setHours(0,0,0,0);cutoff.setDate(cutoff.getDate()-6);const out={};
   data.sessions.forEach(s=>{const d=new Date((s.date||today())+'T12:00:00');if(d<cutoff)return;(s.sets||[]).forEach(x=>{if(!x.completed)return;const e=exerciseById(x.exerciseId);const m=e?.muscle||'General';out[m]=(out[m]||0)+1;});});return Object.entries(out).sort((a,b)=>b[1]-a[1]);
 }
 function coachProInsight(){
   const recent=data.sessions.slice(-6); const rir=recent.flatMap(s=>(s.sets||[]).map(x=>Number(x.rir))).filter(Number.isFinite); const avg=rir.length?rir.reduce((a,b)=>a+b,0)/rir.length:null;
   const r=latestRecovery(); const streak=calcStreak(); let title='Todo listo',msg='Registra tus sesiones para que Coach tenga más datos.';
   if(r&&r.score<60){title='Baja recuperación';msg='Mantén cargas o reduce volumen hoy. Prioriza técnica y evita perseguir récords.';}
   else if(avg!==null&&avg<1.2&&recent.length>=3){title='Acumulación alta';msg='Has entrenado muy cerca del fallo. Considera una sesión más ligera o un día extra de recuperación.';}
   else if(recent.length>=5&&streak>=4){title='Constancia alta';msg='Tu historial muestra buena continuidad. Mantén progresión gradual y registra RIR en cada serie.';}
   else if(recent.length){title='Progresión activa';msg='Coach comparará cada ejercicio con su última sesión y ajustará la siguiente carga según reps y RIR.';}
   return {title,msg};
 }
 function previousMarkup(e){const p=lastSetsFor(e.id);if(!p)return '<div class="previous-set"><span>Última sesión</span><b>Sin datos todavía</b></div>';const rows=p.rows.slice(0,8);const details=rows.map((x,i)=>`S${i+1}: ${esc(x.weight||'—')} ${esc(data.profile.unit)} × ${esc(x.reps||'—')} · RIR ${esc(x.rir??'—')}`).join(' &nbsp;•&nbsp; ');const best=p.rows.reduce((a,x)=>((Number(x.weight)||0)>(Number(a.weight)||0)?x:a),p.rows[0]);return '<div class="previous-set"><span>Última sesión · '+fmtDate(p.date)+'</span><b>'+details+'<br><small>Mejor carga: '+esc(best.weight||'—')+' '+esc(data.profile.unit)+'</small></b></div>';}
 const _exerciseBlock=exerciseBlock;
 exerciseBlock=function(id,s){const html=_exerciseBlock(id,s);const e=exerciseById(id);if(!e)return html;const note=previousMarkup(e);return html.replace('<div class="notice" style="margin:9px 0">',note+'<div class="notice" style="margin:9px 0">');};
 function wake(){if('wakeLock' in navigator){navigator.wakeLock.request('screen').then(lock=>{window.__gymWake=lock;toast('Pantalla activa durante el entrenamiento');}).catch(()=>{});}}
 function sleep(){try{window.__gymWake?.release();}catch(e){}window.__gymWake=null;}
 function gymMode(on){data.settings=data.settings||{};data.settings.gymMode=!!on;save();document.body.classList.toggle('gym-mode',!!on);if(on)wake();else sleep();toast(on?'Gym Mode activado':'Gym Mode desactivado');}
 function timer(sec){
   clearInterval(window.__gymTimer);let left=Math.max(1,Number(sec)||90);let el=document.getElementById('gymTimer');if(!el){el=document.createElement('div');el.id='gymTimer';el.className='gym-timer';document.body.appendChild(el);}el.classList.add('show');
   const paint=()=>{el.innerHTML='<div class="gym-timer-card"><div class="tiny">DESCANSO</div><strong>'+Math.floor(left/60)+':'+String(left%60).padStart(2,'0')+'</strong><div class="row"><button class="btn small" id="timerMinus">−15s</button><button class="btn primary small" id="timerStop">Cerrar</button><button class="btn small" id="timerPlus">+15s</button></div></div>';document.getElementById('timerMinus').onclick=()=>{left=Math.max(1,left-15);paint()};document.getElementById('timerPlus').onclick=()=>{left+=15;paint()};document.getElementById('timerStop').onclick=()=>{clearInterval(window.__gymTimer);el.classList.remove('show')};};
   paint();window.__gymTimer=setInterval(()=>{left--;if(left<=0){clearInterval(window.__gymTimer);left=0;paint();navigator.vibrate?.([180,100,180]);toast('Descanso terminado');}else paint();},1000);
 }
 function warmup(exId){const pre=exId?lastExercise(exId).find(x=>Number(x.weight)>0)?.weight||suggest(exId).weight:"";openModal('<h2>🔥 Calentamiento inteligente</h2><p class="muted">Calcula series progresivas según tu peso de trabajo. No son series al fallo.</p><div class="two"><div><label class="label">Peso de trabajo</label><input class="input" id="wuWeight" type="number" min="0" step="0.5" value="${esc(pre)}"></div><div><label class="label">Reps objetivo</label><input class="input" id="wuReps" type="number" min="1" max="30" value="8"></div></div><label class="label">Unidad</label><select class="select" id="wuUnit"><option value="lb" '+(data.profile.unit==='lb'?'selected':'')+'>lb</option><option value="kg" '+(data.profile.unit==='kg'?'selected':'')+'>kg</option></select><div id="wuOut" class="calculator-output"></div><button class="btn" id="cancelModal">Cerrar</button>');
   const calc=()=>{const w=Math.max(0,Number(document.getElementById('wuWeight').value)||0),u=document.getElementById('wuUnit').value,r=Math.max(1,Number(document.getElementById('wuReps').value)||8);const plan=[[.4,Math.max(8,Math.min(12,r+4))],[.6,Math.max(5,Math.min(10,r+2))],[.75,Math.max(3,Math.min(8,r+1))],[.9,Math.max(1,Math.min(5,Math.ceil(r/2)))]],vals=w?plan.map(([p,rr])=>({w:Math.max(0,roundUnit(w*p,u)),r:rr,p})):[];document.getElementById('wuOut').innerHTML=vals.length?'<div class="notice">Haz descansos cortos y deja varias repeticiones en reserva.</div>'+vals.map((v,i)=>'<div class="calc-row"><b>Serie '+(i+1)+'</b><span>'+v.w+' '+u+' × '+v.r+' reps · '+Math.round(v.p*100)+'%</span></div>').join(''):'<div class="empty">Introduce un peso de trabajo.</div>';};document.getElementById('wuWeight').oninput=calc;document.getElementById('wuReps').oninput=calc;document.getElementById('wuUnit').onchange=calc;calc();
 }
 function plates(exId){const pre=exId?(suggest(exId).weight||""):"";openModal('<h2>🏋️ Calculadora de discos</h2><p class="muted">Configura los discos disponibles a un lado de la barra.</p><div class="two"><div><label class="label">Peso objetivo</label><input class="input" id="plTarget" type="number" step="0.5" value="${esc(pre)}"></div><div><label class="label">Barra</label><input class="input" id="plBar" type="number" step="0.5" value="45"></div></div><label class="label">Discos disponibles por lado</label><input class="input" id="plSet" value="45,25,10,5,2.5"><div id="plOut" class="calculator-output"></div><button class="btn" id="cancelModal">Cerrar</button>');
   const calc=()=>{let target=Number(document.getElementById('plTarget').value)||0,bar=Number(document.getElementById('plBar').value)||0;let plates=document.getElementById('plSet').value.split(',').map(Number).filter(x=>x>0).sort((a,b)=>b-a);let per=Math.max(0,(target-bar)/2);let best=null;const scale=100;const vals=plates.map(x=>Math.round(x*scale));const targetInt=Math.round(per*scale);function dfs(i,left,used){if(left===0){best=used.slice();return true;}if(i>=vals.length||left<0)return false;const v=vals[i],max=Math.floor(left/v);for(let n=max;n>=0;n--){for(let j=0;j<n;j++)used.push(plates[i]);if(dfs(i+1,left-n*v,used))return true;for(let j=0;j<n;j++)used.pop();}return false;}if(target>0&&targetInt>0)dfs(0,targetInt,[]);let html;if(target<=0)html='<div class="empty">Introduce un peso objetivo.</div>';else if(best)html='<div class="calc-row"><b>Por lado</b><span>'+best.join(' + ')+' · listo</span></div>';else html='<div class="calc-row"><b>No hay combinación exacta</b><span>Revisa barra y discos disponibles.</span></div>';document.getElementById('plOut').innerHTML=html;};['plTarget','plBar','plSet'].forEach(id=>document.getElementById(id).oninput=calc);calc();}
 function analytics(){
   const usableExercises=data.exercises.filter(e=>data.sessions.some(s=>(s.sets||[]).some(x=>x.exerciseId===e.id&&Number(x.weight)>0&&Number(x.reps)>0)));
   const defaultEx=usableExercises[0]?.id||data.exercises[0]?.id||'';
   openModal('<h2>📊 Análisis avanzado</h2><div class="analytics-tabs"><button class="btn small primary" data-atab="exercise">Ejercicios</button><button class="btn small" data-atab="muscle">Músculos</button><button class="btn small" data-atab="frequency">Frecuencia</button></div><div id="analyticsOut"></div><button class="btn" id="cancelModal">Cerrar</button>');
   const escH=esc;
   function fmtNum(v){return Number.isInteger(v)?String(v):String(Math.round(v*10)/10);}
   function svgLine(points,label,unit){
     if(!points.length)return '<div class="empty">Aún no hay suficientes datos.</div>';
     const W=680,H=220,P=34, vals=points.map(p=>Number(p.v)||0), min=Math.min(...vals),max=Math.max(...vals),range=max-min||1;
     const xy=points.map((p,i)=>{const x=P+(i*Math.max(1,W-2*P))/Math.max(1,points.length-1);const y=H-P-((p.v-min)/range)*(H-2*P);return {x,y,p};});
     const poly=xy.map(q=>q.x.toFixed(1)+','+q.y.toFixed(1)).join(' ');
     const dots=xy.map(q=>'<circle cx="'+q.x.toFixed(1)+'" cy="'+q.y.toFixed(1)+'" r="4"><title>'+escH(q.p.d)+': '+fmtNum(q.p.v)+' '+escH(unit||'')+'</title></circle>').join('');
     const first=escH(points[0].d),last=escH(points[points.length-1].d);
     return '<div class="analysis-chart"><svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+escH(label)+'"><line x1="'+P+'" y1="'+(H-P)+'" x2="'+(W-P)+'" y2="'+(H-P)+'" class="chart-axis"/><line x1="'+P+'" y1="'+P+'" x2="'+P+'" y2="'+(H-P)+'" class="chart-axis"/><polyline points="'+poly+'" fill="none" class="chart-line"/>'+dots+'</svg><div class="chart-labels"><span>'+first+'</span><b>'+escH(label)+'</b><span>'+last+'</span></div></div>';
   }
   function metricSeries(id){
     const rows=[];
     data.sessions.slice().sort((a,b)=>a.date.localeCompare(b.date)).forEach(s=>{
       const xs=(s.sets||[]).filter(x=>x.exerciseId===id&&Number(x.weight)>0&&Number(x.reps)>0&&x.completed!==false);
       if(!xs.length)return;
       let best=xs[0], bestOne=estimate1RM(best.weight,best.reps), totalVol=0, totalReps=0, rir=[];
       xs.forEach(x=>{const one=estimate1RM(x.weight,x.reps);if(one>bestOne){best=x;bestOne=one;}totalVol+=(Number(x.weight)||0)*(Number(x.reps)||0);totalReps+=Number(x.reps)||0;if(x.rir!==''&&x.rir!==undefined&&Number.isFinite(Number(x.rir)))rir.push(Number(x.rir));});
       rows.push({date:s.date,weight:Number(best.weight)||0,reps:Number(best.reps)||0,volume:totalVol,oneRM:bestOne,rir:rir.length?rir.reduce((a,b)=>a+b,0)/rir.length:null,totalReps});
     });
     return rows;
   }
   function periodSummary(rows){
     const now=new Date();now.setHours(0,0,0,0);const cut7=new Date(now);cut7.setDate(cut7.getDate()-6);const cut30=new Date(now);cut30.setDate(cut30.getDate()-29);
     const inP=(days)=>rows.filter(r=>new Date(r.date+'T12:00:00')>=days);
     const a=inP(cut7),b=inP(cut30),all=rows;
     const best=xs=>xs.length?Math.max(...xs.map(r=>r.oneRM)):0;
     const avg=xs=>{const v=xs.map(r=>r.rir).filter(Number.isFinite);return v.length?v.reduce((x,y)=>x+y,0)/v.length:null;};
     return {w:a.length,m:b.length,all:all.length,best7:best(a),best30:best(b),bestAll:best(all),avgRir:avg(all)};
   }
   function stagnationRows(){
     const cutoff=new Date();cutoff.setHours(0,0,0,0);cutoff.setDate(cutoff.getDate()-42);
     return usableExercises.map(e=>{
       const rows=metricSeries(e.id).filter(r=>new Date(r.date+'T12:00:00')>=cutoff);
       if(rows.length<3)return null;
       const first=rows.slice(0,Math.max(1,Math.floor(rows.length/2))),last=rows.slice(Math.floor(rows.length/2));
       const firstBest=Math.max(...first.map(r=>r.oneRM)),lastBest=Math.max(...last.map(r=>r.oneRM));
       const firstVol=first.reduce((a,r)=>a+r.volume,0),lastVol=last.reduce((a,r)=>a+r.volume,0);
       const no1=lastBest<=firstBest*1.02,noVol=lastVol<=firstVol*1.05;
       return no1&&noVol?{name:e.name,rows:rows.length,oneRM:lastBest,first:firstBest}:null;
     }).filter(Boolean);
   }
   function draw(type){
     const out=document.getElementById('analyticsOut');
     document.querySelectorAll('[data-atab]').forEach(b=>{const active=b.dataset.atab===type;b.classList.toggle('primary',active);b.setAttribute('aria-selected',active?'true':'false');});
     if(type==='muscle'){
       const muscle={}; data.sessions.forEach(s=>(s.sets||[]).forEach(x=>{if(x.completed===false)return;const v=(+x.weight||0)*(+x.reps||0);if(!v)return;const e=exerciseById(x.exerciseId),m=e?.muscle||'General';muscle[m]=(muscle[m]||0)+v;}));
       const rows=Object.entries(muscle).sort((a,b)=>b[1]-a[1]);
       out.innerHTML='<h3>Volumen por músculo</h3><p class="muted">Volumen acumulado de tus sesiones registradas.</p>'+(rows.length?rows.map(([m,v])=>'<div class="metric"><div class="between"><b>'+escH(m)+'</b><span>'+Math.round(v)+' '+escH(data.profile.unit)+'·reps</span></div><div class="metricbar"><i style="width:'+Math.min(100,Math.max(4,v/(rows[0][1]||1)*100))+'%"></i></div></div>').join(''):'<div class="empty">Aún no hay series completadas.</div>')+'<h3 style="margin-top:18px">Estancamiento detectado</h3>'+(stagnationRows().length?stagnationRows().map(x=>'<div class="notice"><b>'+escH(x.name)+'</b><br><span class="muted">'+x.rows+' sesiones recientes · 1RM estimado actual '+fmtNum(x.oneRM)+' '+escH(data.profile.unit)+'</span><br><span>El rendimiento lleva varias sesiones sin una mejora clara. Considera revisar recuperación, técnica, volumen o hacer una descarga.</span></div>').join(''):'<div class="empty">No se detecta estancamiento con los datos disponibles.</div>');
       return;
     }
     if(type==='frequency'){
       const weeks={};data.sessions.forEach(s=>{const d=new Date(s.date+'T12:00:00');if(Number.isNaN(d.getTime()))return;const day=(d.getDay()+6)%7;d.setDate(d.getDate()-day);const key=d.toISOString().slice(0,10);weeks[key]=(weeks[key]||0)+1;});
       const arr=Object.entries(weeks).sort((a,b)=>a[0].localeCompare(b[0])).slice(-12);
       const max=Math.max(...arr.map(x=>x[1]),1);
       out.innerHTML='<h3>Frecuencia semanal</h3><p class="muted">Sesiones completadas por semana.</p>'+(arr.length?'<div class="freq-chart">'+arr.map(([d,n])=>'<div class="freq-col"><b>'+n+'</b><i style="height:'+Math.max(8,n/max*100)+'%"></i><small>'+escH(fmtDate(d))+'</small></div>').join('')+'</div>':'<div class="empty">Sin sesiones.</div>')+'<h3 style="margin-top:18px">Análisis histórico</h3><div class="grid">'+[['7 días',data.sessions.filter(s=>new Date(s.date+'T12:00:00')>=new Date(Date.now()-6*86400000)).length],['30 días',data.sessions.filter(s=>new Date(s.date+'T12:00:00')>=new Date(Date.now()-29*86400000)).length],['Total',data.sessions.length]].map(x=>'<div class="card"><div class="kpi">'+x[0]+'</div><div class="big">'+x[1]+'</div><div class="muted">sesiones</div></div>').join('')+'</div>';
       return;
     }
     let id=document.getElementById('analyticsExercise')?.value||defaultEx;const e=exerciseById(id),rows=metricSeries(id),sum=periodSummary(rows);
     out.innerHTML='<label class="label">Ejercicio</label><select class="select" id="analyticsExercise">'+usableExercises.map(x=>'<option value="'+escH(x.id)+'" '+(x.id===id?'selected':'')+'>'+escH(x.name)+'</option>').join('')+'</select>'+(e?'<div class="analysis-summary"><div><b>'+fmtNum(sum.best7||0)+'</b><small>1RM · 7 días</small></div><div><b>'+fmtNum(sum.best30||0)+'</b><small>1RM · 30 días</small></div><div><b>'+fmtNum(sum.bestAll||0)+'</b><small>1RM · histórico</small></div><div><b>'+ (sum.avgRir===null?'—':sum.avgRir.toFixed(1))+'</b><small>RIR medio</small></div></div><h3>Peso</h3>'+svgLine(rows.map(r=>({d:fmtDate(r.date),v:r.weight})),e.name+' · peso',data.profile.unit)+'<h3>Repeticiones</h3>'+svgLine(rows.map(r=>({d:fmtDate(r.date),v:r.reps})),e.name+' · reps','reps')+'<h3>Volumen</h3>'+svgLine(rows.map(r=>({d:fmtDate(r.date),v:r.volume})),e.name+' · volumen',data.profile.unit+'·reps')+'<h3>1RM estimado</h3>'+svgLine(rows.map(r=>({d:fmtDate(r.date),v:r.oneRM})),e.name+' · 1RM',data.profile.unit)+'<h3>RIR</h3>'+svgLine(rows.filter(r=>r.rir!==null).map(r=>({d:fmtDate(r.date),v:r.rir})),e.name+' · RIR','RIR')+'<h3>Análisis histórico</h3><div class="history-grid"><div><b>7 días</b><span>'+sum.w+' sesiones</span></div><div><b>30 días</b><span>'+sum.m+' sesiones</span></div><div><b>Histórico</b><span>'+sum.all+' sesiones</span></div></div><h3>Estancamiento</h3>'+(stagnationRows().some(x=>x.name===e.name)?'<div class="notice"><b>⚠️ Posible estancamiento</b><br>Las últimas sesiones no muestran una mejora clara en 1RM estimado ni volumen.</div>':'<div class="notice">No se detecta estancamiento para este ejercicio con los datos disponibles.</div>'):'<div class="empty">Registra peso y reps para generar análisis.</div>');
     document.getElementById('analyticsExercise')?.addEventListener('change',()=>draw('exercise'));
   }
   draw('exercise');document.querySelectorAll('[data-atab]').forEach(b=>b.onclick=()=>draw(b.dataset.atab));
 }
 const _more=more;
 more=function(){return _more()+'<div class="card pro12"><div class="between"><div><span class="eyebrow">V14 PRO MAX</span><h3>Herramientas avanzadas</h3><div class="muted">Todo lo nuevo para entrenar como una app premium.</div></div><span class="pill">NUEVO</span></div><div class="pro-tools"><button class="coach-tile" data-protool="analytics"><span>📊</span><b>Análisis</b><small>1RM, frecuencia y músculos</small></button><button class="coach-tile" data-protool="warmup"><span>🔥</span><b>Calentamiento</b><small>Series progresivas</small></button><button class="coach-tile" data-protool="plates"><span>🏋️</span><b>Discos</b><small>Calcula por lado</small></button><button class="coach-tile" data-protool="gym"><span>📱</span><b>Gym Mode</b><small>Botones grandes + pantalla activa</small></button></div></div>';
 };
 const _bind=bind;
 bind=function(){_bind();
   document.body.classList.toggle('gym-mode',!!(data.settings&&data.settings.gymMode));
   document.querySelectorAll('[data-protool]').forEach(b=>b.onclick=()=>{const k=b.dataset.protool;if(k==='analytics')analytics();if(k==='warmup')warmup();if(k==='plates')plates();if(k==='gym')gymMode(!(data.settings&&data.settings.gymMode));});
   document.querySelectorAll('[data-warmup-ex]').forEach(b=>b.onclick=()=>warmup(b.dataset.warmupEx));
   document.querySelectorAll('[data-plates-ex]').forEach(b=>b.onclick=()=>plates(b.dataset.platesEx));
   document.getElementById('advancedAnalytics')?.addEventListener('click',analytics);
   document.querySelectorAll('[data-rest]').forEach(b=>b.onclick=()=>timer(Number(b.dataset.rest)));
   document.getElementById('gymModeQuick')?.addEventListener('click',()=>gymMode(!(data.settings&&data.settings.gymMode)));
   document.getElementById('finishSession')?.addEventListener('click',sleep);
 };
 const _train=train;
 train=function(){const html=_train();if(state.activeSession){return html.replace('<div class="between"><div><span class="pill">SESIÓN</span><h1>', '<div class="gym-session-head"><div class="between"><div><span class="pill">SESIÓN</span><h1>').replace('</h1></div><button class="btn" id="finishSession">Finalizar</button></div>', '</h1></div><div class="row"><button class="btn small" id="gymModeQuick">📱 Gym</button><button class="btn" id="finishSession">Finalizar</button></div></div></div>');}return html;};
 const _finish=finishSession;
 finishSession=function(){sleep();return _finish.apply(this,arguments)};
 window.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&data.settings?.gymMode&&state.activeSession)wake();});
})();


/* ===== GymTrack v15 · Progreso y personalización avanzada ===== */
(function(){
  const baseProgress=progress;
  const baseMore=more;
  function ensureV15(){
    data.photos=data.photos||[]; data.weights=data.weights||[]; data.sessions=data.sessions||[];
    data.profile=data.profile||{}; data.profile.dashboardGreeting=data.profile.dashboardGreeting||'';
    data.profile.dashboardMetric=data.profile.dashboardMetric||'volume';
    data.profile.photoReminders=data.profile.photoReminders!==false;
    data.coach=data.coach||defaultCoach(); data.coach.achievements=data.coach.achievements||[];
    data.coach.measurements=data.coach.measurements||[];
  }
  function escV(s){return esc(s)}
  function v15Modal(title,body){openModal(`<h2>${title}</h2>${body}`)}
  function allPhotoDates(){return [...new Set(data.photos.map(p=>p.date).filter(Boolean))].sort().reverse()}
  function photoByType(date,type){return data.photos.find(p=>p.date===date&&p.type===type)||data.photos.find(p=>p.date===date)}
  function photoCompareModal(){
    ensureV15(); const dates=allPhotoDates();
    if(dates.length<1){toast('Primero registra al menos una foto');return;}
    const a=dates[0],b=dates[1]||dates[0];
    openModal(`<h2>🔄 Comparador Antes / Después</h2><p class="muted">Elige dos fechas y mueve el control para comparar.</p>
      <div class="grid"><div><label class="label">Antes</label><select class="select" id="cmpBefore">${dates.map(d=>`<option value="${escV(d)}" ${d===b?'selected':''}>${fmtDate(d)}</option>`).join('')}</select></div>
      <div><label class="label">Después</label><select class="select" id="cmpAfter">${dates.map(d=>`<option value="${escV(d)}" ${d===a?'selected':''}>${fmtDate(d)}</option>`).join('')}</select></div></div>
      <label class="label">Vista</label><select class="select" id="cmpType"><option value="Frontal">Frontal</option><option value="Lateral">Lateral</option><option value="Espalda">Espalda</option></select>
      <div id="cmpOut" style="margin-top:14px"></div><button class="btn" id="cancelModal" style="margin-top:14px;width:100%">Cerrar</button>`);
    const draw=()=>{
      const before=document.getElementById('cmpBefore')?.value, after=document.getElementById('cmpAfter')?.value, type=document.getElementById('cmpType')?.value||'Frontal';
      const bp=photoByType(before,type), ap=photoByType(after,type), out=document.getElementById('cmpOut'); if(!out)return;
      if(!bp&&!ap){out.innerHTML='<div class="empty">No hay fotos para esas fechas.</div>';return;}
      const left=bp?.data||ap?.data, right=ap?.data||bp?.data;
      out.innerHTML=`<div class="compare-wrap" id="compareWrap"><img class="compare-base" src="${escV(right)}" alt="Después"><div class="compare-before" id="compareBefore"><img src="${escV(left)}" alt="Antes"></div><input class="compare-slider" id="compareSlider" type="range" min="0" max="100" value="50" aria-label="Comparar antes y después"><span class="compare-label before-label">ANTES</span><span class="compare-label after-label">DESPUÉS</span></div><div class="compare-meta"><span>${bp?fmtDate(before):'Sin foto'} · Antes</span><b>${type}</b><span>${ap?fmtDate(after):'Sin foto'} · Después</span></div>`;
      const slider=document.getElementById('compareSlider'),clip=document.getElementById('compareBefore'); slider?.addEventListener('input',()=>{if(clip)clip.style.width=slider.value+'%'});
    };
    ['cmpBefore','cmpAfter','cmpType'].forEach(id=>document.getElementById(id)?.addEventListener('change',draw)); draw();
  }
  function advancedPhoto(){
    openModal(`<h2>📸 Foto de progreso avanzada</h2><div class="grid"><div><label class="label">Fecha</label><input class="input" id="photoDate" type="date" value="${today()}"></div><div><label class="label">Tipo</label><select class="select" id="photoType"><option>Frontal</option><option>Lateral</option><option>Espalda</option></select></div></div><label class="label">Peso de ese día (${escV(data.profile.unit||'lb')})</label><input class="input" id="photoWeight" type="number" step="0.1" placeholder="Opcional"><label class="label">Nota</label><textarea class="textarea" id="photoNote" placeholder="Cómo te sentías, iluminación, medidas, etc."></textarea><label class="label">Foto</label><input class="input" id="photoFile" type="file" accept="image/*"><div class="row" style="margin-top:14px"><button class="btn" id="cancelModal">Cancelar</button><button class="btn primary" id="savePhotoV15">Guardar foto</button></div>`);
    document.getElementById('savePhotoV15').onclick=async()=>{
      const f=document.getElementById('photoFile')?.files?.[0]; if(!f){toast('Selecciona una foto');return;}
      try{const d=await compressImage(f),date=document.getElementById('photoDate')?.value||today(),type=document.getElementById('photoType')?.value||'Frontal',weight=Number(document.getElementById('photoWeight')?.value)||null,note=document.getElementById('photoNote')?.value?.trim()||'';data.photos.push({id:uid('p'),date,type,data:d,weight,note});if(weight){data.weights=data.weights||[];data.weights.push({id:uid('w'),date,weight});}save();closeModal();render();toast('Foto de progreso guardada');}catch(e){alert('No se pudo procesar la foto. Intenta con otra imagen.')}};
  }
  function metricsPanel(){
    ensureV15();
    const sessions=data.sessions.length, prs=Object.keys(data.records||{}).length, photos=data.photos.length, streak=calcStreak();
    const vol=data.sessions.reduce((sum,s)=>(s.sets||[]).reduce((a,x)=>a+(Number(x.weight)||0)*(Number(x.reps)||0)+0,a)+sum,0);
    const weights=data.weights.filter(x=>Number(x.weight)>0).slice().sort((a,b)=>a.date.localeCompare(b.date));
    const first=weights[0]?.weight,last=weights.at(-1)?.weight;
    const delta=(first!=null&&last!=null)?roundUnit(Number(last)-Number(first),data.profile.unit):null;
    const muscle={}; data.sessions.forEach(s=>(s.sets||[]).forEach(x=>{if(x.completed===false)return;const v=(+x.weight||0)*(+x.reps||0);const m=exerciseById(x.exerciseId)?.muscle||'General';if(v)muscle[m]=(muscle[m]||0)+v;}));
    const top=Object.entries(muscle).sort((a,b)=>b[1]-a[1]).slice(0,5);
    v15Modal('📊 Métricas de progreso',`<div class="grid"><div class="card"><div class="kpi">Entrenamientos</div><div class="big">${sessions}</div></div><div class="card"><div class="kpi">PRs</div><div class="big">${prs}</div></div><div class="card"><div class="kpi">Racha</div><div class="big">${streak} <small>días</small></div></div><div class="card"><div class="kpi">Fotos</div><div class="big">${photos}</div></div></div><div class="card"><h3>Volumen histórico</h3><div class="big">${Math.round(vol)} <small>${escV(data.profile.unit)}·reps</small></div></div><div class="card"><h3>Tendencia de peso</h3><div class="between"><span>${first??'—'} ${first!=null?escV(data.profile.unit):''}</span><b>${last??'—'} ${last!=null?escV(data.profile.unit):''}</b></div><div class="muted" style="margin-top:8px">${delta===null?'Registra varios pesos para ver el cambio.':(delta>0?'+':'')+delta+' '+escV(data.profile.unit)+' desde el primer registro'}</div></div><div class="card"><h3>Volumen por músculo</h3>${top.length?top.map(([m,v])=>`<div class="metric"><div class="between"><b>${escV(m)}</b><span>${Math.round(v)} ${escV(data.profile.unit)}·reps</span></div><div class="metricbar"><i style="width:${Math.min(100,Math.max(4,v/(top[0][1]||1)*100))}%"></i></div></div>`).join(''):'<div class="empty">Completa entrenamientos para generar métricas.</div>'}</div>`);
  }
  function historyPanel(){
    const rows=data.sessions.slice().sort((a,b)=>String(b.date).localeCompare(String(a.date)));
    v15Modal('📚 Historial completo',`<div class="history-tools"><input class="input" id="histSearch" placeholder="Buscar ejercicio o rutina"><select class="select" id="histRange"><option value="all">Todo</option><option value="30">Últimos 30 días</option><option value="90">Últimos 90 días</option></select></div><div id="histOut"></div>`);
    const draw=()=>{const q=(document.getElementById('histSearch')?.value||'').toLowerCase(),range=document.getElementById('histRange')?.value||'all',cut=range==='all'?null:new Date(Date.now()-(Number(range)-1)*86400000);const filtered=rows.filter(s=>{const name=data.routines.find(r=>r.id===s.routineId)?.name||'Entrenamiento';const ex=(s.sets||[]).map(x=>exerciseById(x.exerciseId)?.name||'').join(' ');return (!q||(name+' '+ex).toLowerCase().includes(q))&&(!cut||new Date(s.date+'T12:00:00')>=cut)});const out=document.getElementById('histOut');out.innerHTML=filtered.length?filtered.map(s=>{const sets=(s.sets||[]).filter(x=>x.completed!==false);const vol=sets.reduce((a,x)=>a+(+x.weight||0)*(+x.reps||0),0),name=data.routines.find(r=>r.id===s.routineId)?.name||'Entrenamiento';return `<div class="history-item"><div class="between"><b>${escV(name)}</b><span>${fmtDate(s.date)}</span></div><div class="muted">${sets.length} series · ${Math.round(vol)} ${escV(data.profile.unit)}·reps</div><div class="history-exercises">${[...new Set(sets.map(x=>exerciseById(x.exerciseId)?.name||x.exerciseId))].slice(0,5).map(escV).join(' · ')}</div></div>`}).join(''):'<div class="empty">No hay entrenamientos que coincidan.</div>';};
    document.getElementById('histSearch').oninput=draw;document.getElementById('histRange').onchange=draw;draw();
  }
  function achievementsPanel(){
    ensureV15(); const days=new Set(data.sessions.map(s=>s.date)).size, totalVol=data.sessions.reduce((a,s)=>a+(s.sets||[]).reduce((x,y)=>x+(+y.weight||0)*(+y.reps||0),0),0);
    const defs=[['Primer entrenamiento','Completa tu primera sesión',data.sessions.length>=1],['5 entrenamientos','Completa 5 sesiones',data.sessions.length>=5],['10 entrenamientos','Completa 10 sesiones',data.sessions.length>=10],['25 entrenamientos','Completa 25 sesiones',data.sessions.length>=25],['Primer PR','Consigue tu primer récord personal',Object.keys(data.records||{}).length>=1],['5 PRs','Consigue 5 récords personales',Object.keys(data.records||{}).length>=5],['Primera foto','Registra tu progreso fotográfico',data.photos.length>=1],['Comparación','Registra fotos en al menos 2 fechas',new Set(data.photos.map(p=>p.date)).size>=2],['Constancia','Entrena en 7 días diferentes',days>=7],['10k volumen','Acumula 10.000 de volumen',totalVol>=10000],['50k volumen','Acumula 50.000 de volumen',totalVol>=50000]];
    const d=coachState();defs.forEach(([name,desc,ok])=>{if(ok&&!d.achievements.some(a=>a.name===name))d.achievements.push({name,desc,date:today()})});save();
    v15Modal('🏆 Logros',`<div class="achievement-grid">${defs.map(([name,desc,ok])=>`<div class="achievement ${ok?'unlocked':''}"><span>${ok?'🏆':'🔒'}</span><div><b>${escV(name)}</b><small>${escV(desc)}</small>${ok?'<em>Desbloqueado</em>':''}</div></div>`).join('')}</div>`);
  }
  function personalizePanel(){
    ensureV15();
    const themes=['verde','azul','morado','rosa','rojo','oro','claro'];
    openModal(`<h2>✨ Personalizar GymTrack</h2><label class="label">Cómo quieres que te salude</label><input class="input" id="dashGreeting" maxlength="40" placeholder="Ej. A romperla hoy" value="${escV(data.profile.dashboardGreeting||'')}"><label class="label">Métrica principal en Progreso</label><select class="select" id="dashMetric"><option value="volume">Volumen</option><option value="weight">Peso</option><option value="oneRM">1RM estimado</option><option value="sessions">Sesiones</option></select><label class="label">Tema</label><div class="theme-grid">${themes.map(t=>`<button class="btn small ${data.profile.theme===t?'primary':''}" data-v15-theme="${t}">${t}</button>`).join('')}</div><label class="checkline" style="margin-top:12px"><input id="photoReminder" type="checkbox" ${data.profile.photoReminders?'checked':''}> Recordarme el progreso fotográfico</label><div class="row" style="margin-top:14px"><button class="btn" id="cancelModal">Cancelar</button><button class="btn primary" id="savePersonalize">Guardar</button></div>`);
    document.getElementById('dashMetric').value=data.profile.dashboardMetric||'volume';
    document.querySelectorAll('[data-v15-theme]').forEach(b=>b.onclick=()=>{data.profile.theme=b.dataset.v15Theme;applyTheme();document.querySelectorAll('[data-v15-theme]').forEach(x=>x.classList.toggle('primary',x===b));});
    document.getElementById('savePersonalize').onclick=()=>{data.profile.dashboardGreeting=document.getElementById('dashGreeting').value.trim();data.profile.dashboardMetric=document.getElementById('dashMetric').value;data.profile.photoReminders=document.getElementById('photoReminder').checked;save();closeModal();render();toast('Personalización guardada');};
  }
  function v15Progress(){
    ensureV15();
    const html=baseProgress();
    return html.replace('<div class="hero"><div class="between"><div>', `<div class="v15-progress-tools card"><div><span class="eyebrow">V15 PROGRESS</span><h3>${escV(data.profile.dashboardGreeting||'Tu progreso, más personal')}</h3><div class="muted">Fotos, métricas, logros e historial en un solo lugar.</div></div><div class="v15-tool-grid"><button class="btn" id="v15Photos">📸 Fotos</button><button class="btn" id="v15Compare">🔄 Comparar</button><button class="btn" id="v15Metrics">📊 Métricas</button><button class="btn" id="v15Achievements">🏆 Logros</button><button class="btn" id="v15History">📚 Historial</button><button class="btn" id="v15Personalize">✨ Personalizar</button></div></div></div><div class="hero"><div class="between"><div>`);
  }
  progress=v15Progress;
  more=function(){return baseMore()+`<div class="card pro12"><div class="between"><div><span class="eyebrow">V15</span><h3>Progreso y personalización</h3><div class="muted">Herramientas avanzadas para ver tu evolución.</div></div><span class="pill">NUEVO</span></div><div class="pro-tools"><button class="coach-tile" data-v15-action="photos"><span>📸</span><b>Fotos avanzadas</b><small>Fechas, notas y métricas</small></button><button class="coach-tile" data-v15-action="compare"><span>🔄</span><b>Antes / Después</b><small>Comparador deslizable</small></button><button class="coach-tile" data-v15-action="metrics"><span>📊</span><b>Métricas</b><small>Evolución y volumen</small></button><button class="coach-tile" data-v15-action="achievements"><span>🏆</span><b>Logros</b><small>Hitos y constancia</small></button><button class="coach-tile" data-v15-action="history"><span>📚</span><b>Historial</b><small>Entrenamientos anteriores</small></button><button class="coach-tile" data-v15-action="personalize"><span>✨</span><b>Personalizar</b><small>Tema y preferencias</small></button></div></div>`;};
  const oldBind=bind;
  bind=function(){oldBind();
    document.getElementById('v15Photos')?.addEventListener('click',advancedPhoto);
    document.getElementById('v15Compare')?.addEventListener('click',photoCompareModal);
    document.getElementById('v15Metrics')?.addEventListener('click',metricsPanel);
    document.getElementById('v15Achievements')?.addEventListener('click',achievementsPanel);
    document.getElementById('v15History')?.addEventListener('click',historyPanel);
    document.getElementById('v15Personalize')?.addEventListener('click',personalizePanel);
    document.querySelectorAll('[data-v15-action]').forEach(b=>b.onclick=()=>({photos:advancedPhoto,compare:photoCompareModal,metrics:metricsPanel,achievements:achievementsPanel,history:historyPanel,personalize:personalizePanel}[b.dataset.v15Action]||(()=>{}))());
  };
  const oldAddPhoto=addPhoto;
  addPhoto=advancedPhoto;
  window.GymTrackV15={metrics:metricsPanel,compare:photoCompareModal,history:historyPanel,achievements:achievementsPanel,personalize:personalizePanel};
  ensureV15();
})();


/* ===== V16 Premium UX Layer ===== */
(function initV16(){
  const originalRender=render;
  const tabLabels={home:'Inicio',plan:'Plan',train:'Entrenar',progress:'Progreso',more:'Más'};
  let renderLock=false, lastTap=0;

  function haptic(kind='light'){
    try{ if(navigator.vibrate) navigator.vibrate(kind==='strong'?12:6); }catch(e){}
  }
  function updateHeader(){
    const sub=document.getElementById('headerSub');
    if(!sub)return;
    const messages={
      home:'Tu entrenamiento, organizado.',plan:'Planifica sin complicarte.',train:state.activeSession?'Sesión activa · registra cada serie.':'Listo para entrenar.',progress:'Mide lo que importa y ve tu evolución.',more:'Herramientas, ajustes y respaldo.'
    };
    sub.textContent=messages[state.tab]||tabLabels[state.tab]||'Tu entrenamiento, organizado.';
  }
  function ensurePremiumChrome(){
    let fab=document.getElementById('v16Top');
    if(!fab){
      fab=document.createElement('button');fab.id='v16Top';fab.className='v16-fab';fab.type='button';fab.setAttribute('aria-label','Volver arriba');fab.textContent='↑';
      document.body.appendChild(fab);
      fab.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
      window.addEventListener('scroll',()=>fab.classList.toggle('show',window.scrollY>420),{passive:true});
    }
    let status=document.getElementById('v16Status');
    if(!status){
      status=document.createElement('div');status.id='v16Status';status.className='v16-top-status';
      const main=document.getElementById('main');if(main&&main.firstElementChild)main.insertBefore(status,main.firstElementChild);
    }
    const offline=!navigator.onLine;
    const recovery=typeof latestRecovery==='function'?latestRecovery():null;
    status.className='v16-top-status'+(offline?' offline':'')+(recovery&&Number(recovery.score)<60?' warn':'');
    status.innerHTML=offline?'<i></i><span>Sin conexión · tus datos siguen guardados en este iPhone.</span>':recovery&&Number(recovery.score)<60?'<i></i><span>Coach: recuperación baja · prioriza técnica y control hoy.</span>':'<i></i><span>GymTrack listo · tus datos se guardan automáticamente.</span>';
  }
  function premiumRender(){
    if(renderLock)return;
    renderLock=true;
    try{
      originalRender();
      updateHeader();
      const main=document.getElementById('main');
      if(main){main.classList.remove('v16-enter');void main.offsetWidth;main.classList.add('v16-pulse');setTimeout(()=>main.classList.remove('v16-pulse'),300);}
      requestAnimationFrame(ensurePremiumChrome);
    }finally{renderLock=false;}
  }
  render=premiumRender;

  // Safer tab navigation: top-level tab changes always start at the top.
  document.addEventListener('click',e=>{
    const btn=e.target.closest('button');
    if(!btn)return;
    const now=Date.now();
    if(now-lastTap<280 && !btn.closest('.modalbox')){e.preventDefault();return;}
    lastTap=now;
    if(!btn.disabled && (btn.classList.contains('navbtn')||btn.classList.contains('primary')||btn.classList.contains('iconbtn')))haptic('light');
    const tab=btn.dataset?.tab;
    if(tab && tab!==state.tab){requestAnimationFrame(()=>window.scrollTo({top:0,behavior:'auto'}));}
  },true);

  // Close sheets by tapping the backdrop; never close when tapping their content.
  document.addEventListener('click',e=>{
    const modal=e.target;
    if(modal?.id==='modal' && !e.target.closest('#modalBox')) closeModal();
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!document.getElementById('modal')?.classList.contains('hidden'))closeModal();});

  // Focus the first useful field whenever a sheet opens.
  const oldOpen=openModal;
  openModal=function(html){
    oldOpen(html);
    requestAnimationFrame(()=>{
      const box=document.getElementById('modalBox');
      const first=box?.querySelector('input:not([type="hidden"]),select,textarea,button.primary');
      if(first&&window.innerWidth>520)try{first.focus({preventScroll:true});}catch(e){}
    });
  };

  // Prevent accidental duplicate taps on destructive/save actions.
  document.addEventListener('click',e=>{
    const b=e.target.closest('button');
    if(!b||b.disabled||b.dataset.v16NoLock!==undefined)return;
    const label=(b.textContent||'').trim().toLowerCase();
    if(!/guardar|eliminar|reemplazar|terminar|exportar|confirmar|crear|generar/.test(label))return;
    b.dataset.v16Busy='1';
    setTimeout(()=>{if(b.isConnected){delete b.dataset.v16Busy;}},700);
  },true);

  // Network state and smart offline notice.
  window.addEventListener('online',()=>{toast('Conexión restaurada');ensurePremiumChrome();});
  window.addEventListener('offline',()=>{toast('Sin conexión · GymTrack sigue funcionando');ensurePremiumChrome();});

  // Friendly runtime recovery instead of leaving a blank screen.
  let fatalShown=false;
  function showRuntimeError(){
    if(fatalShown)return; fatalShown=true;
    const main=document.getElementById('main');
    if(main)main.innerHTML='<div class="v16-error"><h3>Algo no salió como esperaba</h3><p>GymTrack protegió tus datos. Puedes volver a Inicio e intentarlo de nuevo.</p><button class="btn primary" id="v16Recover">Volver a Inicio</button></div>';
    document.getElementById('v16Recover')?.addEventListener('click',()=>{fatalShown=false;state.tab='home';premiumRender();});
  }
  window.addEventListener('error',()=>{try{showRuntimeError();}catch(e){}});
  window.addEventListener('unhandledrejection',()=>{try{toast('No se pudo completar esa acción. Tus datos están a salvo.');}catch(e){}});

  // Better iPhone keyboard behavior: scroll focused fields into the visible area.
  document.addEventListener('focusin',e=>{
    if(!e.target.matches('input,select,textarea'))return;
    setTimeout(()=>{try{e.target.scrollIntoView({block:'center',behavior:'smooth'});}catch(err){}},220);
  });

  // Keep user preference for reduced motion without changing the app's existing theme system.
  try{
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.documentElement.classList.toggle('v16-reduced',reduce);
  }catch(e){}

  // Premium metadata and iOS standalone polish.
  try{
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content','#111714');
    document.body.classList.toggle('standalone',window.matchMedia('(display-mode: standalone)').matches||navigator.standalone===true);
  }catch(e){}
})();

applyTheme();
render();
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));