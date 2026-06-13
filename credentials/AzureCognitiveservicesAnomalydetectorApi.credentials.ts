import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureCognitiveservicesAnomalydetectorApi implements ICredentialType {
        name = 'N8nDevAzureCognitiveservicesAnomalydetectorApi';

        displayName = 'Azure Cognitiveservices Anomalydetector API';

        icon: Icon = { light: 'file:../nodes/AzureCognitiveservicesAnomalydetector/azure-cognitiveservices-anomalydetector.png', dark: 'file:../nodes/AzureCognitiveservicesAnomalydetector/azure-cognitiveservices-anomalydetector.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Cognitiveservices Anomalydetector API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
