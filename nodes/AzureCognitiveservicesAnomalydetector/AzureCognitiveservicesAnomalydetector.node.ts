import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureCognitiveservicesAnomalydetector implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Cognitiveservices Anomalydetector',
                name: 'N8nDevAzureCognitiveservicesAnomalydetector',
                icon: { light: 'file:./azure-cognitiveservices-anomalydetector.png', dark: 'file:./azure-cognitiveservices-anomalydetector.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Anomaly Detector API detects time series anomalies in stateless and stateful modes.',
                defaults: { name: 'Azure Cognitiveservices Anomalydetector' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureCognitiveservicesAnomalydetectorApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
