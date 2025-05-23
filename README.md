# Serverless with Python Requirements  

JavaScript GitHub Action that runs a Serverless deploy using the `serverless-python-requirements` plugin.  
It also supports optional plugins such as `serverless-domain-manager` and `serverless-plugin-canary-deployments`.  
It also receive parameters options on deploy like to `region` and `stage`.

See [examples](./examples/) for multiple example configurations.

## Inputs  

| Name                                    | Required     | Description  |
|-----------------------------------------|--------------|--------------|
| `aws-access-key-id`                     | **Conditional** | AWS Access Key ID. Required if using AWS credentials instead of Serverless Access Key. Serverless V4 requires a Serverless access key. |
| `aws-secret-access-key`                 | **Conditional** | AWS Secret Access Key. Required if using AWS credentials instead of Serverless Access Key. Serverless V4 requires a Serverless access key. |
| `framework`                             | **Optional** | The Serverless framework version to install. Defaults to latest (default v3). |
| `serverless-access-key`                 | **Conditional** | Serverless access key. Required if not using AWS credentials. Serverless V4 requires a Serverless access key. |
| `working-directory`                     | **Optional** | The working directory to run Serverless deploy in. Must contain the Serverless config file (e.g. serverless.yaml, serverless.yml). Defaults to the current directory. |
| `aws-region`                            | **Optional** | The region aws to deploy serverless stack  |
| `stage`                                | **Optional** | The stage to deploy serverless stack  |

## Example Usage  

### AWS Credentials  
```yaml
- name: Serverless Deploy
  uses: dhollerbach/actions.serverless-with-python-requirements@v3
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

### Serverless Access Key (required if using Serverless V4)
```yaml
- name: Serverless Deploy
  uses: dhollerbach/actions.serverless-with-python-requirements@v3
  with:
    serverless-access-key: ${{ secrets.SERVERLESS_ACCESS_KEY }}
```

### Separate AWS Credentials Step
```yaml
- name: Configure AWS Credentials
  uses: aws-actions/configure-aws-credentials@v4
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-region: us-east-1

- name: Serverless Deploy
  uses: dhollerbach/actions.serverless-with-python-requirements@v3
  with:
    serverless-access-key: ${{ secrets.SERVERLESS_ACCESS_KEY }}
```

### Directory Other Than Root
```yaml
- name: Serverless Deploy
  uses: dhollerbach/actions.serverless-with-python-requirements@v3
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    working-directory: ./examples/
```

### Specific Serverless Framework
```yaml
- name: Serverless Deploy
  uses: dhollerbach/actions.serverless-with-python-requirements@v3
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    framework: 3.26.0
```

https://github.com/dhollerbach/actions.serverless-with-python-requirements