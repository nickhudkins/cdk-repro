#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { GoodReproStack, BadReproStack } from "../lib/cdk-repro-stack";

const app = new cdk.App();
new GoodReproStack(app, "GoodStack", {});
new BadReproStack(app, "BadStack", {});
