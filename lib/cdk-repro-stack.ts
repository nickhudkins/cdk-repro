import * as cdk from "aws-cdk-lib";

import { ServicePrincipal } from "aws-cdk-lib/aws-iam";
import { Secret } from "aws-cdk-lib/aws-secretsmanager";
import { Construct } from "constructs";

export class GoodReproStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const secret = new Secret(this, "something-else", {
      secretName: "my-secret-name",
      description: "My Great Secret",
    });

    secret.grantRead(new ServicePrincipal("some.service.principal"));
  }
}

export class BadReproStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const secret = Secret.fromSecretCompleteArn(
      this,
      "something",
      "arn:aws:secretsmanager:us-east-1:000000000000:secret:the-secret-name-ABC123"
    );

    secret.grantRead(new ServicePrincipal("some.service.principal"));
  }
}
