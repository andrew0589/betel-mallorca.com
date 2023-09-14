import React from 'react'
import './servicii_inchinare.css'
import church from '../../assets/church.png'
import hands from '../../assets/hands.png'
import bible from '../../assets/bible.png'
import yought from '../../assets/youth.png'
import children from '../../assets/children.png'
import music from '../../assets/music.png'

const Servicii_inchinare = () => {
  return (
    <div className='betel__servicii_inchinare section__padding' id='servicii_inchinare'>
      <div className='betel__containers'>
        <img src={church} />
        <h1>Serviciu de închinare</h1>
        <h4>Duminică  10:00 - 12:00 <br></br>Duminică  18:00 - 20:00</h4>
        <p>În cadrul fiecărui serviciu de închinare de duminică dimineața și seară, te poți întâlni cu Dumnezeu
          prin rugăciune, cântare, citirea și predicarea Scripturii. Noi ne apropiem de Dumnezeu și Dumnezeu
          se apropie de noi! Adevărurile veșnice ale Bibliei sunt prezentate într-un mod clar și practic, pe
          înțelesul tuturor; acestea îți pot aduce eliberare, schimbare și mântuire. Vino să te închini lui
          Dumnezeu și să auzi ce are El să-ți spună! Alături de noi te vei simți „acasă”, chiar dacă nu ai mai
          fost niciodată la biserică. Te așteptăm cu drag, în fiecare duminică, ora 10:00!
        </p>
      </div>
      <div className='betel__containers'>
        <img src={hands} />
        <h1>Serviciu de rugăciune</h1>
        <h4>Marți 20:00 - 21:00 <br></br>Joi 20:00 - 21:00</h4>
        <p>Prin rugăciune, sufletul se apropie in mod direct de Creator Său, cu scopul de a onora si aduce laudă
         Numelui Său. De asemenea, ea reprezintă calea care aduce pace si vindecare sufletească, prin rugăciuni 
         de cerere, de mărturisire. Asa cum psalmistul spune: Apropiați- va de Domnul si El se va apropia de voi, 
         te invităm sa te unești alaturi de noi in rugăciune.
        </p>
      </div>
      <div className='betel__containers'>
        <img src={bible} />
        <h1>Studiu biblic</h1>
        <h4>Sâmbătă 18:00 - 19-00</h4>
        <p>Cunoașterea Cuvântului lui Dumnezeu reprezintă fundamentul vieții de credință. Dacă dorești să
                    aprofundezi Cuvântul lui Dumnezeu, te invităm în fiecare sâmbătă, începând cu orele 18.00, unde se
                    vor trata teme teologice esențiale , cărți ale Bibliei, aspecte doctrinare, pe care orice copil al
                    lui Dumnezeu ar trebui să le cunoască și să le întipărească în inima și mintea sa. Scopul studiului
                    biblic este acela de a forma un credincios tare în credință, statornic și sigur pe calea lui
                    Dumnezeu, care să nu se lase clătinat de fel și fel de învățături subtile, specifice vremurilor
                    apostatice în care trăim, străine de Scriptură și care au scopul de a ne îndepărta de Adevărul lui
                    Dumnezeu. Studiul este deschis oricărei persoane, fără limită de vârstă! Te așteptăm cu drag!
        </p>
      </div>
      <div className='betel__containers'>
        <img src={yought} />
        <h1>Tineret</h1>
        <h4>Sâmbata 20:00 - 21:00</h4>
        <p>Lucrarea de tineret este integrată atât în planul de slujire în biserică, la laudă și închinare, cât
                    și în planul de formare spirituală a tinerilor, prin participarea la studiul biblic. Formarea
                    tinerilor este una din prioritățile Bisericii Betel, întrucât aceștia reprezintă viitorul Bisericii.
                    Într-o lume dezisă de Dumnezeu, în care nu mai există conceptul de păcat, de bine sau rău, lupta
                    tinerilor este din ce în ce mai aprigă, mult mai dificilă decât cea a generațiilor din trecut.
                    Scopul lucrărilor destinate tinerilor este acela ca aceștia să trăiască în temere, cunoștință și
                    reverență către Dumnezeu, iar versetele din Eclesiastul 12:1-3, sunt stindardul pe care îl înălțăm
                    în rândul acestora : Dar adu-ţi aminte de Făcătorul tău în zilele tinereţii tale, până nu vin zilele
                    cele rele şi până nu se apropie anii când vei zice: „Nu găsesc nicio plăcere în ei”; până nu se
                    întunecă soarele şi lumina, luna şi stelele, şi până nu se întorc norii îndată după ploaie; până nu
                    încep să tremure paznicii casei şi să se încovoaie cele tari până nu se opresc cei ce macină căci
                    s-au împuţinat; până nu se întunecă cei ce se uită pe ferestre (Eclesiastul 12:1-3).
        </p>
      </div>
      <div className='betel__containers'>
        <img src={children} />
        <h1>Școala Duminicală</h1>
        <h4>Duminică 10:00 - 12:00</h4>
        <p> Educația copiilor oferită de Scoala duminicală din cadrul Bisericii Betel are loc în fiecare
            duminică, începând cu orele 10.00, cuprinzând atât copiii cei mici , cu vârsta peste 3 ani, cât și
            pe cei preadolescenți, fiecare dintre cele două grupe beneficiind de pregătire adaptată grupei de
            vârstă din care fac parte. Profesionalismul maestrelor de scoală duminicală, vine din dedicarea
            profesiei acestora în slujba Domnului. Alege să investești în copilul tău!
        </p>
      </div>
      <div className='betel__containers'>
        <img src={music} />
        <h1>Activitate corală</h1>
        <h4>Sâmbătă 19:00 - 20-00</h4>
        <p> Biserica Betel se bucură duminică de duminică de imnuri corale, pregătite cu dedicare de corul mixt
                    al bisericii. Dacă Domnul te-a înzestrat cu darul de a cânta, alătură-te corului mixt Betel!
                    Repertoriul cuprinde atât imnuri clasice, cât și cântări noi, acompaniate de către instrumentiști
                    sau negativ. Avem nevoie de vocea ta! Te așteptăm în fiecare sâmbătă de la orele 19.00!
        </p>
      </div>
    </div>
  )
}

export default Servicii_inchinare