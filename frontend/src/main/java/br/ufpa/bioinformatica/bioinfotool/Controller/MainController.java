package br.ufpa.bioinformatica.bioinfotool.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    public String drosophilaMessage = "Drosophila melanogaster é uma espécie de mosca (ordem taxonômica Diptera) " +  
    "na família Drosophilidae. A espécie também é conhecida como mosca-das-frutas ou mosca-do-vinagre. " +
    "A espécie é amplamente utilizada como um organismo modelo, principalmente em pesquisas de genética.";
    
    @GetMapping
    public String getInitialPage(Model model) {
        model.addAttribute("message", drosophilaMessage);

        return "index";
    }
}
