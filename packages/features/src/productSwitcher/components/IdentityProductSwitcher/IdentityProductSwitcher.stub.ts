const IDENTITY_URL = 'https://identity.demo.astral-dev.ru';

type MockRequest = {
  searchParams: Record<string, string>;
};

export const MOCK_FETCH_IDENTITY_PRODUCT = [
  {
    url: `${IDENTITY_URL}/api/tenants/widget`,
    method: 'GET',
    status: 200,
    response: [
      {
        id: 'astral',
        name: 'Астрал',
      },
      {
        id: '1c',
        name: '1С',
      },
    ],
  },
  {
    url: `${IDENTITY_URL}/api/products/widget?tenantId=*`,
    method: 'GET',
    status: 200,
    response: ({ searchParams }: MockRequest) => {
      switch (searchParams.tenantId) {
        case 'astral': {
          return {
            data: [
              {
                id: '21675431-843c-423a-9bec-8a48bce2c73c',
                name: 'Личный кабинет',
                productUrl: 'https://personarea.demo.astral-dev.ru',
                description: 'Личный кабинет экосистемы продуктов Астрал',
                shortDescription: 'ЛК Астрал',
                iconFileId: '19afa635-c3c6-4683-9692-79d80f5f9d10',
                backgroundHexColor: '#2E77FF',
                logoUrl: `${IDENTITY_URL}/api/Files/19afa635-c3c6-4683-9692-79d80f5f9d10`,
                tenantId: 'astral',
              },
              {
                id: '6fe18f7a-7dfb-48c6-ab07-0d8da638244f',
                name: 'Астрал.Отчет',
                productUrl: 'https://demo-report.astralnalog.ru/',
                description: 'Астрал Отчет',
                shortDescription: 'Астрал Отчет',
                iconFileId: '5731cbfc-267d-45e0-af08-d4e6c68881f4',
                backgroundHexColor: '#2e77ff',
                logoUrl: `${IDENTITY_URL}/api/Files/5731cbfc-267d-45e0-af08-d4e6c68881f4`,
                tenantId: 'astral',
              },
              {
                id: '9f98d09d-5e09-4900-a3fb-ae582aae3343',
                name: 'Астрал.Доверенность',
                productUrl: 'https://poa.demo.cloud.astral-dev.ru',
                description: 'Астрал.Доверенность',
                shortDescription: 'Астрал.Доверенность',
                iconFileId: 'afe2ff5f-f03b-4ba2-a3dd-0adf6c9ca71a',
                backgroundHexColor: '#33adf2',
                logoUrl: `${IDENTITY_URL}/api/Files/afe2ff5f-f03b-4ba2-a3dd-0adf6c9ca71a`,
                tenantId: 'astral',
              },
              {
                id: '9fce36d1-e4cb-4352-ab41-1a2d37b206bc',
                name: 'Астрал.ЭДО',
                productUrl: 'https://edo.astral-dev.ru',
                description: 'Астрал ЭДО',
                shortDescription: 'Астрал ЭДО',
                iconFileId: '1639299f-3f67-48f4-a9e7-5bdfc339f91f',
                backgroundHexColor: '#755afd',
                logoUrl: `${IDENTITY_URL}/api/Files/1639299f-3f67-48f4-a9e7-5bdfc339f91f`,
                tenantId: 'astral',
              },
              {
                id: 'b556f1f8-a0f2-49d8-9d02-3273625ea6cd',
                name: 'Астрал.ОФД',
                productUrl: 'https://test.ofd.astralnalog.ru/lk',
                description: 'Астрал ОФД',
                shortDescription: 'Астрал ОФД',
                iconFileId: '6ad838ab-7773-4daa-9b9b-22ca07ae1540',
                backgroundHexColor: '#00b2ff',
                logoUrl: `${IDENTITY_URL}/api/Files/6ad838ab-7773-4daa-9b9b-22ca07ae1540`,
                tenantId: 'astral',
              },
              {
                id: 'c50fa9b0-eabe-4cd2-aa36-5fb6d187e147',
                name: 'Астрал.КЭДО',
                productUrl: 'https://kedo.cloud.astral-dev.ru',
                description: 'Кадровый электронный документооборот',
                shortDescription: 'Астрал КЭДО',
                iconFileId: 'f049b85e-32d2-4332-a56d-00477b9cfe24',
                backgroundHexColor: '#7856ff',
                logoUrl: `${IDENTITY_URL}/api/Files/f049b85e-32d2-4332-a56d-00477b9cfe24`,
                tenantId: 'astral',
              },
            ],
            meta: {
              totalCount: 6,
            },
          };
        }
        case '1c': {
          return {
            data: [
              {
                id: '47a0545a-c511-4f2f-abc6-8b2a036f592a',
                name: '1C-Докс',
                productUrl: 'https://personarea.demo.astral-dev.ru',
                description: '1C-Докс',
                shortDescription: '1C-Докс',
                iconFileId: '47a0545a-c511-4f2f-abc6-8b2a036f592a',
                backgroundHexColor: '#7756FF',
                logoUrl: `${IDENTITY_URL}/api/Files/47a0545a-c511-4f2f-abc6-8b2a036f592a`,
                tenantId: '1c',
              },
            ],
            meta: {
              totalCount: 1,
            },
          };
        }
        default: {
          return {
            data: [],
            meta: {
              totalCount: 0,
            },
          };
        }
      }
    },
  },
];
