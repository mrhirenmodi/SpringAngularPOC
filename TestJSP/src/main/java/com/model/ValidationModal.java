package com.model;

import java.util.ArrayList;
import java.util.List;

public class ValidationModal {
	
	private boolean statusFlag;
	private List<TableModal> tableList = new ArrayList<TableModal>();
	public boolean isStatusFlag() {
		return statusFlag;
	}
	public void setStatusFlag(boolean statusFlag) {
		this.statusFlag = statusFlag;
	}
	public List<TableModal> getTableList() {
		return tableList;
	}
	public void setTableList(List<TableModal> tableList) {
		this.tableList = tableList;
	}

}
