package com.controller;



import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.runners.MockitoJUnitRunner;

import com.controller.SpringMVCController;
import com.dao.TeamDAO;
import com.model.Team;


@RunWith(MockitoJUnitRunner.class)  
public class SpringMVCControllerJTest {


	@Mock
	private TeamDAO teamDAO;
	
	@InjectMocks
    private final SpringMVCController springMVCController = new SpringMVCController();

	
	@Before
	public void init() {
		MockitoAnnotations.initMocks(this);

	}
	
	@Test(timeout=5000)
	public void nullReturnsCheck() throws Exception {

		Mockito.when(teamDAO.getTeams()).thenReturn(null);
		Assert.assertTrue(springMVCController.getTeamList() == null);
	}
	
	@Test(timeout=5000)
	public void SingleObjectListCheck() throws Exception {

		List <Team> List = new ArrayList<Team>();
		Team team = new Team();
		team.setId(6);
		team.setName("Hiren");
		team.setRating(1);
		List.add(team);
		Mockito.when(teamDAO.getTeams()).thenReturn(List);
		Assert.assertTrue(springMVCController.getTeamList().size()>0);
	}
/*	@Before
	public void init() {
		mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
	}
		 Assert.assertEquals(2>1,true);
		 
	   this.mockMvc.perform(get("/springMVCTest.mvc")).andExpect(status().isOk().
	   .alwaysExpect(content().contentType("application/json;charset=UTF-8")));
	  }
*/
}