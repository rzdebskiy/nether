﻿using Microsoft.Extensions.CommandLineUtils;
using System;
using System.Collections.Generic;
using System.Text;

namespace IdentityServerTestClient
{
    public class IdentityClientApplication : CommandLineApplication
    {
        public GlobalArguments GlobalArguments { get; private set; }

        public string RootUrl => GlobalArguments.RootUrl.Value() ?? "http://localhost:5000/";
        public string IdentityRootUrl => RootUrl.EnsureTrailingSlash() + "identity/";
        public string ApiRootUrl => RootUrl.EnsureTrailingSlash() + "api/";

        public IdentityClientApplication()
        {
            GlobalArguments = new GlobalArguments
            {
                RootUrl = Option("--root-url", "Root Url for nether", CommandOptionType.SingleValue)
            };
        }

    }

    public  class GlobalArguments
    {
        public CommandOption RootUrl { get; internal set; }
    }
}
