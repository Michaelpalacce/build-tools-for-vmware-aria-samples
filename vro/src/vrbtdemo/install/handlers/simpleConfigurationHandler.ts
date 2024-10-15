/*-
 * #%L
 * vro
 * %%
 * Copyright (C) 2024 VMWARE
 * %%
 * Copyright 2023 VMware, Inc.
 * 
 * This product is licensed to you under the BSD 2 clause (the "License"). You may not use this product except in compliance with the License.
 * 
 * This product may include a number of subcomponents with separate copyright notices and license terms. Your use of these subcomponents is subject to the terms and conditions of the subcomponent's license, as noted in the LICENSE file.
 * #L%
 */
(function () {
    const CONFIG = "VMware/PSCOE/VRBT Demo/VRBT Demo"

    function ConfigHandler() { /** Intentional */ }
    
    ConfigHandler.prototype.configure = (input: any) => {

        input.readString("vra.hostname")
            .config(CONFIG)
            .set("vra_hostname");       
    }

    return ConfigHandler;
});
