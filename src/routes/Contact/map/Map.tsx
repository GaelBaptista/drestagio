import { useState } from "react";
import './map.css'


export function Map () {
  
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const stateClickHandler = (stateName: string) => {
    setSelectedState(stateName);
  };
  const renderCityList = () => {
    if (selectedState === 'Ceará') {
      return (
        <ul>
          <li>Fortaleza</li>
          <li>Pacajus</li>
          <li>Horizonte</li>
          <li>Chorozinho</li>
        </ul>
      );
    } else if (selectedState === 'Rio Grande do Norte') {
      return (
        <ul>
          <li>Natal</li>
          <li>Mossoró</li>
          <li>Parnamirim</li>
          <li>Ceará-Mirim</li>
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="map-container">
      {/* SVG do mapa com componentes React */}
      <svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg" width="800" height="800">
      <g className="map-region" fill="#FF6609" fill-rule="evenodd" stroke="#ccc" stroke-linejoin="round" stroke-width="1.5">
        <path d="m328.17 460.37l-5.3472 0.7334 0.9757-4.1273 2.3378-1.4942-1.1699-8.12-2.5341-0.5198-2.7289-5.0019-0.3904-4.6122-4.0931-1.689-6.4316-0.13-6.2367-3.6378-1.3648-3.443-5.6521-3.443-8.965-1.2993 10.133-11.238 0.7788-5.0019 5.6507-7.7302 5.7488-3.4266 0.0973-4.401 10.231-1.8676 19.975 0.471 22.898 12.943 1.4615 10.799-4.3848 10.215-3.6783 2.846-3.2886 5.7692-2.3142 4.7948-11.297 6.6552-2.1376 4.1219-1.5529 6.6552-3.9447 1.5176-2.7754 3.6613z"/>
  <path d="m367.01 412.47l-3.2459 1.1723-1.486-10.511-23.702-13.239-20.389 0.2071-3.2398 0.4019 6.6989-3.8854 2.0219-3.4956-0.1218-4.0802 15.079-0.1827 5.5296 2.9353 5.3347 0.7917 3.9706-1.9366 2.9963-3.1059 11.376-0.3775 9.2323-1.7417-3.0449 5.079-0.5176 23.388-4.6101 4.2903-1.8818 4.2903z"/>
  <path d="m377.65 374.77l1.9988-1.2062 2.7799-1.7346-3.4692-2.4698-6.0424-0.8156-10.086-21.401-20.746-9.4542-7.8804-0.448-16.887 14.991 0.2068 19.586 0.3905 2.1252 5.9046-0.2642-0.1609 5.2498 15.094-0.0804 4.4341 2.4928 6.456 1.2062 4.6984-2.5215 2.4928-2.8891 10.867-0.0804 9.9481-2.286z"/>
  <path d="m379.53 369.49l3.0901 1.9701 6.1687-5.8184 1.39-5.0832 5.985-2.3262 9.1096-1.4072 2.309-1.0396 0.8386-2.8776 4.5146 0.0632 4.6984-6.5536 0.471-2.6938-5.043-3.429-6.881 3.004-4.8592 2.2688-4.124-0.4882-0.448-14.457-6.5134-15.008-16.806-0.1206-10.006-6.7374-10.189-0.8558 0.2872 5.2096-2.4698 0.2469-5.962 7.0476-0.8156 10.172-9.4542 6.4962 7.6392 0.4308 20.505 9.6208 10.029 21.752 6.5363 0.6146z"/>
  <path d="m413.31 352.9l4.1664-6.6563 0.4114-2.4475-4.735-3.7341 4.8226-0.4258 9.0499-0.6096 6.1092-1.7123 4.455-2.4476 3.7198-4.4693 3.7198-5.3883 9.4175 9.3156 0.3332 5.8701-1.907 2.5502-8.1561 1.9988-1.3556 3.653-1.5393 1.2636-22.125 0.1608-0.9879 2.734-5.3991 0.3446z"/>
  <path d="m454.41 334.01l0.8977-1.2967 1.9202-0.7481 2.9175 0.2494 1.1221-2.7431 0.4239-3.94 2.0947-2.6931 3.7903-4.5883 1.3965-6.8825-0.1994-5.2866 1.3964-4.688-0.798-3.4911-3.9898-0.8977-5.2866-1.7954h-4.0896l-0.399 12.169-1.8952 4.9874-2.7928 5.885-5.9847 0.6982 0.1994 5.8851 9.2764 9.1766z"/>
  <path d="m472.66 297.64l-3.3086-0.2545-7.0147-6.633-1.6702-5.106 8.51-7.9056-1.4157-3.5789-10.832-9.1781-7.0148 0.2386-9.0508-5.8695-12.868-0.5249-1.1612-5.8695-12.868 9.1463-8.5418 0.4931 0.6204-42.773-6.5058-0.0159 9.2735-11.214 5.7104-0.0159 4.7998 8.0129 9.381-5.2213 4.7998-4.9668-5.0309-6.4427 25.255-0.08 5.6583-5.1701 2.6042 0.429 5.4038 7.3006 12.021-9.7512 11.257 7.3006 0.2938 9.5658 5.6383 0.4036-0.2153 3.9666-6.0689 0.6581 0.0392 6.7662 4.8748 4.4756 4.3658 1.4216-0.9177 3.4545-3.2082 1.9274-0.4087 4.4725-2.1902 1.9274-2.4447 2.9455-4.4807 2.4364-3.9717 0.4004 1.4441 4.1221-0.3373 23.719-2.8825 2.8496-1.101 3.3586-0.8463 6.1582-1.61 3.6131-0.3374 8.1942-3.6459 0.8135z"/>
  <path d="m398.87 257.48l6.1843-0.0702 0.5919 4.9291 8.5599-0.4774 12.857-9.1738 1.1595 5.8999 12.857 0.5115 9.0715 5.8658 7.0253-0.2387 10.811 9.1738 1.4323 3.5809-8.5258 7.912 1.6711 5.1155 7.0253 6.8718-3.9901-0.6309-5.286-1.8075h-4.0924l-0.3751 12.175-1.9098 4.9791-2.7965 5.8999-5.968 0.6821 0.1535 5.9851-3.8026 5.4736-3.7172 4.4676-4.4335 2.4554-6.1045 1.7051-9.0715 0.6139-4.8086 0.4092 2.8306 2.2508-2.9329-2.0121-6.8889 3.0011-4.8427 2.2849-4.1265-0.4774-0.4434-14.46-6.5137-15.006-16.813-0.1364-9.9923-6.7525-10.197-0.8526 12.564-11.435 21.73-0.5543 0.7723-10.386 5.9219-9.6617 0.4138-11.456 3.9822 0.0424 0.0173-6.6979z"/>
  <path d="m504.77 222.65l-5.4451 4.7099-3.7909-1.5393-5.0775-4.1125-0.6662-7.0533 6.6857-0.6203 5.7667 0.2987 7.7885 1.2177-5.2613 7.0993z"/>
  <path d="m502.61 214.39l7.5575 0.9727 4.5649-0.9291 0.5251-4.4841 4.5649-1.2523 3.2722-6.7463 0.5251-3.0298-8.5238 2.6258-8.039 0.8483-3.3883-1.2877-2.5804-2.2572-1.934-1.934-2.2572 0.1666-3.2267 1.9441-2.742 1.2978 0.0051 9.2156 5.7774 0.3238-0.2013 4.202 6.1006 0.3238z"/>
  <path d="m523.58 198.88l2.9086-1.7775 2.2433-5.8488 0.1427-9.8885-5.1898 4.3313-8.9064 0.4532-6.9672 5.1393-4.8666-11.828-7.9368 6.2704-5.1897-5.364-5.3224 6.3726-7.0998-7.524-9.5237 0.2323-0.1515 7.6654-6.2919 5.4031 0.6565 2.6561 5.3425 7.1806 12.129-9.7862 11.16 7.827 6.4736-3.3227 2.7571 0.5555 4.0498 3.4641 3.8882 1.2018 7.7663-1.0604 7.928-2.3531z"/>
  <path d="m511.01 174.54l0.0865-5.6258 17.893 3.6437-0.1138 9.0965-5.1899 4.3313-8.9062 0.4532-6.9673 5.1393-4.8666-11.828-7.9368 6.2704-5.1898-5.364-4.429-9.7208 3.2702-4.319 6.3588 3.9772 9.789-2.9031 0.5829 6.6362 5.6189 0.2124z"/>
  <path d="m414.65 208.59l-5.6642 0.262 0.1953-14.283c3.7538-13.331 13.106-21.454 25.713-25.932l6.5746-0.1546 0.4557-19.423 12.238-20.147 6.3794 1.5948 7.5511 48.464-0.1302 8.1044-6.6398 4.9798 0.7812 3.2873-2.6038-0.8055-5.7285 5.3134-24.866 0.3662 4.8496 6.2756-5.045 4.8436-9.6016 5.3643-4.4582-8.1097z"/>
  <path d="m392.09 156.26l0.3421 22.946 5.5028 4.3929 5.6971 0.1821-0.1216 5.5392-5.5973 0.2406 0.5249 9.7831 5.4721 9.5537 4.8426-0.3143 0.1953-13.694c3.7538-13.331 13.106-21.454 25.713-25.932l6.5747-0.1546 0.4557-19.423 12.238-20.147-18.108-5.5858-2.0231 2.8024-3.6284-0.9174-5.7192-7.3561-3.6712-0.9273-6.0647-3.8732-2.9347-1.6638-5.1985-0.6461-8.1445 26.419-14.589 13.347 8.2421 5.4298z"/>
  <path d="m385.78 156.4h-8.0809l6.4905-5.7598 7.694 5.5879 0.6448 22.781 5.8027 4.7282 5.287-0.086-0.043 5.7598-5.7168-0.086 0.446 9.4026 5.2601 10.09 5.5046-0.3976-9.4268 11.294 6.2917-0.0537-0.0698 13.701-12.621 6.8236-11.056 0.1008-4.6939-4.1976-3.3185-0.0712-3.4904 4.9149-6.929-3.3379-0.3956-10.215-5.3817 5.4307-2.0331-0.2757 0.03-10.076 4.5004-18.673 12.258-16.79 6.756-18.337 4.005-8.0209 2.2856-4.2383z"/>
  <path d="m394.62 271.81l0.2054-7.7469-12.862-2.1467-0.3174 10.248 12.974-0.3547z"/>
  <path d="m356.45 238.37l-0.4219-5.9995 2.0462 0.2728 5.3883-5.4224 0.3751 10.197 6.9571 3.3421 3.4785-4.9109 3.308 0.0682 4.7063 4.1947 11.05-0.1023 12.584-6.8207-0.3752 27.283-0.4092-3.2398-6.1727 0.0682-0.0341 6.7184-3.956-0.0682-0.2046 5.6612 0.1364-5.7294-12.857-2.1485-0.3069 10.265 12.925-0.341-0.1364 3.7514-5.8999 9.6853-0.7844 10.368-21.724 0.5457-12.55 11.459-21.216-16.405-0.1062-17.917 22.548-30.138 1.6508-4.6362z"/>
  <path d="m353.68 307.5l-0.0682 5.6271-2.4554 0.2387-5.9681 7.0595-0.8185 10.163-9.4467 6.5137-17.495 15.142-9.062 2.8398 0.4731-13.038-4.0559-0.0554-0.7347-3.2256-4.2069-0.0554 0.1612-2.0764-17.049 0.0371-1.6504-3.2841 1.6708-7.2092-0.3373-27.684 3.0544-7.7334 4.413-6.2238 2.6014-2.7516 11.358 0.2678 7.403 5.2806 8.1578-0.0031 3.6289-3.4754 1.6998-1.2085 0.0391 8.3023 7.4757 0.1494 21.212 16.404z"/>
  <path d="m252.52 248.83l-1.3106-4.1771 10.468-19.484-5.2671-0.3438-3.8254-5.306 5.074-0.1601-0.0951-4.1363-16.398 0.0387-0.2939-22.824 31.715 0.2375 5.8693-17.258 7.8573 18.329 74.146 10.007-4.5016 18.689-0.0341 10.06h0.068146l0.4092 5.8658-1.6369 4.604-22.542 30.148 0.1023 17.938 0.0341 0.0341-7.4004-0.1705-0.0341-8.2871-1.7051 1.1936-3.615 3.4786h-8.1848l-7.4005-5.286-11.356-0.2728-2.5919 2.7624-4.3994 6.2409-1.2719 3.1401-2.2548-2.0296-2.3263-8.9349-4.2952-3.5177-1.313-2.5237-0.5177-4.9094-17.218 0.0609-1.3366-7.9192-3.2591-5.3378 2.4676-2.0846 2.1207-0.3665-0.415-6.2798-3.5324-1.2191z"/>
  <path d="m301.05 71.424l8.4478 0.4331 4.6867-1.3455 0.3272 9.425 7.5076 0.4496 21.612 29.684 5.456 0.1932 0.3272-8.013 13.662-12.885 1.6094 7.8864 5.5721 0.0505 1.4034 2.1795 12.408 0.818-4.5765 6.1302-0.2812 6.0031 2.9896 2.122 3.2408-2.203 2.1357-6.931 14.762-0.1324 4.3046 6.0195-8.1508 26.396-14.596 13.368 0.0682 0.0682-6.2068 5.4906h8.0826l-2.285 4.263-3.9901 8.0143-6.7525 18.314-12.584 16.694-73.868-9.9411-7.8438-18.314-4.8401-6.3362 25.726-50.245-23.079-9.0933-7.2229-15.933 3.2311-11.598 9.1292-0.5711 3.2311-2.8791 16.053-0.8275 0.3038-6.7534z"/>
  <path d="m314.22 70.734l0.3272 9.425 7.5076 0.4496 21.612 29.684 5.456 0.1931 0.3273-8.0129 13.662-12.885 2.8758-5.042 0.7385-3.9663-3.7927-5.7677-6.6889-0.5545-6.3028-23.145-2.3963-0.2834-11.278 22.307-22.048-2.4015z"/>
  <path d="m255.88 39.325l-4.0122-0.0197-6.2767 9.3838-5.9566 0.839-2.2019 2.7458-7.3307 0.4107-1.5621 3.8622-2.5831-1.7536-6.1978 0.0083-3.3899-3.3101-6.1978-2.0338-6.0804-1.721 7.9591 7.7238 1.3222 15.126 7.6694-0.1112 5.372 4.7389 0.2668 5.2494 4.5324 5.4424-0.3176 2.8897-4.6571 6.7187 5.8087 6.2082 0.1929 5.6976 5.5534 4.1661 3.0008-0.684 3.3667-8.85 6.9403-0.4262 5.664-8.0842 12.27 0.6281 3.3863-11.679-8.4509-0.6478-0.9848-3.7256-5.9232-4.8939 2.3762-26.208-2.3963-0.7939 0.2088-5.0059-1.3711-1.891z"/>
  <path d="m233.45 239.68l17.909 5.2323 10.468-19.876-5.2671-0.3438-3.8254-5.306 5.074-0.1601-0.0951-4.1363-16.398 0.431-0.2939-22.824-4.4144-0.4805-7.804-9.2412-7.0032-0.032-29.025 19.187 4.4082 0.1682 3.4187 1.2734 1.6169 2.2745-1.5863 5.6779 0.3445 6.6743 4.4696 6.524 4.5231 4.2381 9.7952 5.3318 13.685 5.3875z"/>
  <path d="m220.6 75.535l0.4297-5.13 5.3883 4.7063 0.2728 5.2519 4.5016 5.4565-0.3069 2.8988-4.6381 6.7184 5.7976 6.2068 0.2046 5.6953 5.5248 4.1606 3.0011-0.6821 3.3763-8.8669 6.9571-0.4092 5.6612-8.0825 12.277 0.6139 0.8867-3.0693-0.8185 2.967 7.1958 15.926 23.088 9.1056-25.714 50.234 4.7404 6.2068-5.8317 17.154-31.716-0.2387v0.23872l-4.2629-0.4774-7.8097-9.242-6.9912-0.0341-29.056 19.2-5.5467 3.0413-75.419-30.95 1.1977-2.0844 0.6582-13.415 3.4029-0.1262 0.7051-7.4102 5.2913-0.1262 2.9415-4.6178 6.1788 0.508 4.7146-5.8081 10.65 0.3968 6.0635-17.948-1.8563-11.029-0.2377-11.299-4.5541-5.3638 0.3018-6.4429 8.8766 0.2382 0.1227-3.7422-5.5425-0.2351 1.4716-8.868 15.656-0.418 0.2786-2.0367 1.8973-0.1483 1.6275 2.5495 1.6614-0.3684 5.1338-4.2852 0.483 8.1723 3.9036 5.449 18.086-0.5396 12.142-4.9511 0.7411-4.6544 6.8122 0.0036v-1.5e-5z"/>
  <path d="m110.46 173.27l1.7596 0.6399 73.425 30.674-3.3593 2.8394-0.7998 3.6392-4.1991 0.3149-0.04 3.1943-3.0793 1.1148-0.8398-1.7646-0.9998 1.5947 0.12 4.1541-28.354 0.155-0.2099-16.198-5.3289 1.5584-2.6095 3.3181-9.2105 0.2296-0.4124-5.2092-5.8513-0.0903-8.5013-9.3806-0.0231-4.9015-4.1822-2.9819 0.2284-13.009 2.4679 0.1087z"/> 
</g>
      
        <g className="map-region" fill="#FF6609" fill-rule="evenodd" stroke="#ccc" stroke-linejoin="round" stroke-width="1.5">
          <path
            className="ceara"
            d="m468.09 179.49l-7.5837-48.936c17.652-1.3399 30.226 8.5167 39.676 18.634l-14.744 21.758 4.394 9.7807-4.9799 5.7447-7.5836-7.2745-9.1784 0.293z"
            onClick={() => stateClickHandler('Ceará')}
          />
        </g>
      
        <g className="map-region">
          <path
            className="rioGrandeDoNorte"
            d="m528.89 172.46l0.35-5.3826-2.254-3.1694-1.3833-8.5519-17.267-0.2197-8.2834-5.8179-11.522 17.348 6.8351 3.9383 9.3087-2.7015 0.7161 6.4119 5.6633 0.2929 0.1953-5.8261 17.641 3.6779z"
            onClick={() => stateClickHandler('Rio Grande do Norte')}
          />
        </g>

      </svg>

      {/* Título e lista de cidades */}
      {selectedState && (
        <div className="info-panel">
          <div className="map-title">Onde Estamos</div>
          <div className="city-list">{renderCityList()}</div>
        </div>
      )}
    </div>
  );
}


