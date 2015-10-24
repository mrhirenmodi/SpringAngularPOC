package com.controller;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dao.TeamDAO;
import com.model.TableModal;
import com.model.Team;
import com.model.ValidationModal;

@Controller
public class SpringMVCController {
/*	
	@RequestMapping(value="/angularJS.web",method = RequestMethod.GET)
	public String printWelcome(ModelMap model) {
		return "angularJS";
	}
	*/
	@Autowired
	private TeamDAO teamDao;
	
	@Value("${name.required}")
    String documentRootPath;
	
	 
	@RequestMapping(value="/springMVCTest.mvc", 
			method=RequestMethod.GET,
			produces={"application/json;charset=UTF-8"})
    public @ResponseBody List<Team>  getTeamList() {		
		
		List <Team>teamList = teamDao.getTeams();
		System.out.println("name.required =>" + documentRootPath);
		/*Person person = new Person();
		person.setFirstName("Java");
		person.setLastName("Honk");*/
		return teamList;
	}
	
	@RequestMapping(value="/createTeam.mvc", 
			method=RequestMethod.POST,
			produces={"application/json;charset=UTF-8"},
			consumes={"application/json;charset=UTF-8"})
    public @ResponseBody ValidationModal createTeam(@RequestBody Team team) {	
		
		ValidationModal validationModal = new ValidationModal();
		TableModal tableModal = new TableModal(); 
		List<TableModal> tableList = new ArrayList<TableModal>();
		tableModal.setFieldName("id");
		tableModal.setErrorMessage("Id must be positive value");
		tableList.add(tableModal);
		
		validationModal.setTableList(tableList);
		
		validationModal.setStatusFlag(false);
		
		return validationModal;
		
	}
	
	@RequestMapping(value="/updateTeam.mvc/{id}", 
			method=RequestMethod.GET,
			produces={"application/json;charset=UTF-8"})
    public @ResponseBody ValidationModal updateTeam(@RequestParam("id") int id) {	
		
		System.out.println("ID : " + id);
		
		ValidationModal validationModal = new ValidationModal();
		TableModal tableModal = new TableModal(); 
		List<TableModal> tableList = new ArrayList<TableModal>();
		tableModal.setFieldName("id");
		tableModal.setErrorMessage("Id must be positive value");
		tableList.add(tableModal);
		
		validationModal.setTableList(tableList);
		
		validationModal.setStatusFlag(false);
		
		return validationModal;
		
	}
	
	@RequestMapping(value="/method7.mvc/{id}")
	@ResponseBody
	public String method7(){
	    return "method7 with id=";//+id;
	}
		/*MethodOutcome methodOutcome = new MethodOutcome();
		StringBuilder returnValue = new StringBuilder("[");
		try {
			if (bindingResult.hasErrors()) {
				//returnValue.append(bindingResult)
				returnValue.append("{");
				for(ObjectError error : bindingResult.getAllErrors()) {
					
					System.out.println(error.getDefaultMessage());
					returnValue.append(error.getDefaultMessage() + ",");
				}
				
				returnValue.deleteCharAt(returnValue.length()-1).append("}]");
				System.out.println(returnValue.toString());
				
				methodOutcome.setStatusFlag(false);
			} else {
				System.out.println("Team Name" + team.getName());			
				
				methodOutcome.setStatusFlag(true);
			}
			
		} catch(Exception e) {
			
			e.printStackTrace();
			methodOutcome.setStatusFlag(false);
		}
		
		
	} */
}