//
// Copyright 2023 DXOS.org
//

import { Config, Defaults, Envs, Local } from "@dxos/config";

export const getConfig = async () => new Config(Envs(), Local(), Defaults());
